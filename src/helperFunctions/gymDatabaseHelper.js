import { addDoc, collection, doc, getDoc, getDocs, updateDoc, where, query } from "@firebase/firestore";
import { db } from "../config/firebase";
import { addMonthsToDate } from "./userDatabaseHelper";
import { getDate, getDate3 } from "./basicHelper";
import { cityList, gymList, receiptList, userList } from "../components/Databases";

/**
 * Stores data in gym's database
 * @param {Object} myData - User data including city, gymName, months, userID, contactNo
 * @param {Object} response - Response object from Razorpay containing paymentID, orderID, signature
 * @returns {boolean} - True if save successful, false otherwise
 */
export const storeGymData = async (myData, response) => {
    try {
        const gymRef = collection(db, cityList, myData.city, gymList);
        const gymDocRef = doc(gymRef, myData.gymName);
        let gymDoc = await getDoc(gymDocRef);

        // If gym doesn't exist
        if (!gymDoc.exists()) {
            // const city = myData.city.toLowerCase().replace(/\s+/g, '');
            const gymName = myData.gymName.toLowerCase().replace(/\s+/g, '');
            const gymQuery = query(gymRef, where('codeName', '==', gymName));
            const querySnapshot = await getDocs(gymQuery);

            if (!querySnapshot.empty) {
                // If the gym document exists, get the first matching document
                gymDoc = querySnapshot.docs[0];
            } else {
                return false;
            }
        }
        // console.log('Flag for checking if user exists : ', myData.user.uid);
        const userRef = collection(db, cityList, myData.city, gymList, gymDoc.id, userList);
        const userQuery = query(userRef, where('userID', '==', myData.user.uid));
        const userSnapshot = await getDocs(userQuery);

        // If user is renewing
        if (!userSnapshot.empty) {
            // console.log('Yes user exists, months buying membership for : ', myData.months);
            const userDoc = userSnapshot.docs[0];
            const userData = userDoc.data();
            const userMembershipTill = userData.membershipTill || getDate3();
            console.log('months Gym : ', myData.months);
            await updateDoc(userDoc.ref, {
                status          : true,
                membershipTill  : addMonthsToDate(userMembershipTill, myData.months),
                tryDate         : getDate3()
                // Add a gym membership ID if necessary
            });
        }
        // If user is new to the gym
        else {
            // console.log('User Doc Doesnt exist!');
            const userDBRef = doc(collection(db, 'user'), myData.user.uid);
            const userDBDoc = await getDoc(userDBRef);
            const userDBData = userDBDoc.data();
            // console.log('userDBData : ', userDBData);
            await addDoc(userRef, {
                gender              : userDBData.gender,
                age                 : userDBData.age,
                phoneNumber         : myData.user.phoneNumber,
                profilePic          : userDBData.profilePic,
                email               : myData.user.email,
                userID              : myData.user.uid,
                userName            : userDBData.name,
                membershipFrom      : getDate(),
                memberSince         : getDate(),
                memberSince2        : getDate3(),
                membershipTill      : addMonthsToDate(undefined, myData.months),
                status              : true,
                // Add a gym membership ID if necessary
            });
        }

        // Add the receipts to another collection
        // console.log('Adding MembershipPaymentReceipts')
        const receiptRef = collection(db, cityList, myData.city, gymList, gymDoc.id, receiptList);
        await addDoc(receiptRef, {
            timestamp   : new Date().toISOString(),
            paymentID   : response.razorpay_payment_id,
            orderType   : 'Gym Membership',
            months      : myData.months,
            userID      : myData.user.uid,
            amount      : myData.amount,
            userName    : myData.user.displayName,
            email       : myData.user.email || "",
            personalTrainer : myData.hasTrainer ? myData.trainerName : false // If hasTrainer is True, store their name, else false
        });

        return true;

    } catch (error) {
        console.log('Error:', error);
        return false;
    }
};

/**
 * Stores the "Unknown" User in Gym's Database
 * @param {Object} myData - Stores all the form and gym details
 * @returns {Boolean} - if storing is successful; false otherwise
 */
export const storeUnknownUserInGym = async (myData) => {
    try {
        const gymRef = collection(db, cityList, myData.city, gymList, myData.gymName, userList);
        const gymQuery = query(gymRef, where('email', '==', myData.email));
        const querySnapshot = await getDocs(gymQuery);

        // Check if User is "Kanjar", still not making an account
        // But always buying a membership through the gym
        if (!querySnapshot.empty) {

            // "Kanjar" member found
            const gymDoc = querySnapshot.docs[0];
            const gymData = gymDoc.data();

            // Only update the gymDoc
            await updateDoc(gymDoc.ref, {
                status          : true,
                membershipTill  : addMonthsToDate(gymData.membershipTill || getDate(), myData.months),
            });
            
        } else {
            // New Member
            console.log('User Does Not Exist in Gym Database');
            try {
                await addDoc( gymRef, {
                    age             :   myData.age,
                    gender          :   myData.gender,
                    userName        :   myData.userName,
                    email           :   myData.email,
                    status          :   true,
                    memberSince     :   getDate(),
                    membershipFrom  :   getDate(),
                    membershipTill  :   addMonthsToDate(undefined, myData.months),
                    phoneNumber     :   myData.phoneNumber || "",
                });
            } catch (error) {
                console.log('Error : ', error);
            }
        }

        // Save Receipt 
        const receiptRef = collection(db, cityList, myData.city, gymList, myData.gymName, receiptList);
        await addDoc(receiptRef, {
            timestamp   : new Date().toISOString(),
            paymentID   : "Self",
            orderType   : 'Gym Membership',
            months      : myData.months,
            userID      : "",
            amount      : myData.amount,
            userName    : myData.userName,
            email       : myData.email || "",
            personalTrainer : myData.hasTrainer ? myData.trainerName : false // If hasTrainer is True, store their name, else false
        });
        
        return true;
    } catch (error) {
        console.log('Error : ', error);
        return false;
    }

};