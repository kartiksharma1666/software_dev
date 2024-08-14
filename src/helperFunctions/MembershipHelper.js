import { storeUserData } from "./userDatabaseHelper";
import { storeGymData } from "./gymDatabaseHelper";

/**
 * Stores data in firestore
 * Is called when a payment is successfully made
 * @param   {dict} myData - userID, city, gymName, amount, months
 * @param   {dict} response - Razorpay Receipt
 * @returns true; if save successful, false; otherwise
 */
export const paymentSuccessHandler = async (myData, response) => {
    // store data in 'user' database
    const userBool = storeUserData(myData, response);

    console.log('User Database Status : ', userBool);

    // store data in gym's database
    const gymBool = storeGymData(myData, response)

    console.log('Gym Database Status : ', gymBool);

    if (userBool && gymBool) {
        console.log('Enjoy your gym!');
        alert('Enjoy Your Gym')
    }
    else {
        console.log('Failure!');
    }
}

/**
 * Function to handle payment failure
 */
export const handlePaymentFailure = () => {
    // Implement your logic for handling payment failures here
    // For example, you could log the failure, alert the user, or retry the payment
    alert('Payment failed or was cancelled. Please try again.');
};