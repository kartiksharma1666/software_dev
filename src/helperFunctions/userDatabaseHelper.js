import { addDoc, collection, doc, getDoc, setDoc } from "@firebase/firestore";
import { db } from "../config/firebase";
import { getDate } from "./basicHelper";

/**
 * Stores data in 'user' database
 * @param {Object} myData - User data including city, gymName, months, userID
 * @param {Object} response - Response object from Razorpay containing paymentID, orderID, signature
 * @returns {boolean} - True if save successful, false otherwise
 */
export const storeUserData = async (myData, response) => {
    console.log('MyData : ');
    console.log(myData);
    try {
        const myUserRef = doc(collection(db, 'user'), myData.user.uid);
        const userDoc = await getDoc(myUserRef);

        // If no such user with userID exists
        if (!userDoc.exists()) {
            console.log('No User Found');
            return false;
        }

        // Add receipt to user -> {userID} -> gymMembershipReceipts collection
        const gymMembershipRef = collection(db, 'user', myData.user.uid, 'gymMembershipReceipts');
        await addDoc(gymMembershipRef, {
            timestamp   : new Date().toISOString(),
            paymentID   : response.razorpay_payment_id || "Self",
            orderType   : 'Gym Membership',
            months      : myData.months,
            gymName     : myData.gymName,
            city        : myData.city,
            amount      : myData.amount
        });

        // Update user doc
        const userData = userDoc.data();
        await setDoc(myUserRef, {
            membershipTill: addMonthsToDate(userData.membershipTill || getDate(), myData.months),
            gymName: myData.gymName,
            gymCity: myData.city,
            // Add a gymMembershipID if necessary
        }, { merge: true });

        return true;

    } catch (e) {
        console.log('Error:', e);
        return false;
    }
};


/**
 * Adds months to a given date
 * @param {string} dateStr - The date string in YYYY-MM-DD or DD-MM-YYYY format (or undefined)
 * @param {number} months - The number of months to add
 * @returns {string} - The new date string in DD-MM-YYYY format
 */
export const addMonthsToDate = (dateStr, months) => {
    let date;

    console.log('AddMonthsToDate : ', dateStr);

    // Check if dateStr is undefined or not a valid date
    if (!dateStr || isNaN(Date.parse(convertToISOFormat(dateStr)))) {
        date = new Date(); // Use today's date if dateStr is undefined or invalid
    } else {
        date = new Date(convertToISOFormat(dateStr));
    }

    // Calculate the new month and year
    const newMonth = date.getMonth() + months;
    date.setMonth(newMonth);

    // Handle month overflow
    if (date.getMonth() !== (newMonth % 12)) {
        date.setDate(0);
    }

    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');

    console.log('New Date : ', `${day}-${month}-${year}`);
    return `${day}-${month}-${year}`;
};

/**
 * Converts a date string in DD-MM-YYYY format to YYYY-MM-DD format
 * @param {string} dateStr - The date string in DD-MM-YYYY format
 * @returns {string} - The date string in YYYY-MM-DD format
 */
const convertToISOFormat = (dateStr) => {
    const [day, month, year] = dateStr.split('-');
    return `${year}-${month}-${day}`;
};
