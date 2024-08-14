import { collection, doc, getDoc, updateDoc, setDoc} from "@firebase/firestore";
import { db } from "../config/firebase";
import { getDate, getCalendar, getTime } from "./basicHelper";

/**
 * Checks if the city exists in the world or not
 * @param   :   City Name
 * @return  :   bool    -   true; if city exists
 *                      -   false; otherwise
 */
export const IsCityValid = () => {
    return true
}

/**
 * Is Called when the gym already exists
 * Checks whether the status is active or not
 * @param   :   city    -   contains the city Name
 * @return  :   bool    -   false; if gymDoc exists and is active, true; otherwise
 */
export const IfGymDocExists = async (city, gymDoc, gymDocRef, toUpdate) => {
    // Get the gymData
    const gymData = gymDoc.data()
    
    // Check if the status of the gym is active or not
    if (gymData.status === true) {
        console.log('The gym is already active and listed!');
        return false;
    }
    // Else make gymstatus active
    else {
        // Update the status of the Gym
        await updateDoc(gymDocRef, toUpdate);

        // Increment the number of active gyms in the city
        const cityRef = collection(db, 'Cities');
        const cityDocRef = doc(cityRef, city);
        const cityDoc = await getDoc(cityDocRef);
        const cityData = cityDoc.data();

        await updateDoc(cityDocRef, {
            'NoOfActiveGyms'    : cityData.NoOfActiveGyms + 1,
        });

        return true;
    }
}

/**
 * Adds further collections to the {gym}
 * @param   : gymDocRef
 * @return  : true; if sccuessful, false; otherwise
 */
export const addCollectionsToGyms = async (gymDocRef) => {
    try {
        const reviewsRef    = collection(gymDocRef, 'Reviews');
        const calendarRef   = collection(gymDocRef, 'Calendar');
        const usersRef      = collection(gymDocRef, 'Users');

        await setDoc(doc(reviewsRef, 'testReview'), { 
            Rating: 0,  
            Name: 'CollectionStarter',
        });

        const {year, month, date} = getCalendar();

        await setDoc(doc(calendarRef, getDate()), { 
            timestamp               : getTime(),
            totalUsersAttendance    : 0,
            year                    : year,
            month                   : month,
            date                    : date
        });

        await setDoc(doc(usersRef, 'testUser'), { 
            userName: 'Owner',
            userID: '000',
            memberSince: new Date(),
            gymMembershipID: '000'
        });

        return true;

    } catch (error) {
        console.log('Error : ', error);
        return false;
    }
}

/**
 * formats the name of the Equpiment
 * @param {String} name 
 * @returns 
 */
export const formatEquipmentName = (name) => {
    return name.replace(/([a-z])([A-Z])/g, '$1 $2');
};