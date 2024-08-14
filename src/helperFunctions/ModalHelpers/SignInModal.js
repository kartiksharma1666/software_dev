import { signInWithEmailAndPassword } from "firebase/auth";
import Modal from "react-modal";
import { useState } from "react";
import { auth } from "../../config/firebase";
// import { handlePayment } from "../RazorpayHelper";


const SignInPopup = ({onClose, myData}) => {
    console.log('SignIn PopUp called');

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <>
            <Modal
                isOpen={true}
                onRequestClose={onClose}
                contentLabel="Sign In"
                className="fixed inset-0 flex items-center justify-center z-50 text-black"
                overlayClassName="fixed inset-0 bg-gray-500 bg-opacity-75"
            >
                <div className="bg-primary rounded-lg shadow-lg p-20 w-full max-w-2xl relative flex flex-col items-center space-y-6">
                    <button
                        onClick={onClose}
                        className="absolute top-0 right-4 text-black hover:text-black transition text-4xl"
                    >
                        &times;
                    </button>
                    <div className="flex flex-col space-y-4 w-full">
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter email"
                            className="px-4 py-2 border rounded"
                        />
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Enter password"
                            className="px-4 py-2 border rounded"
                        />
                        <button
                            onClick={() => handleSignIn(email, password, onClose, myData)}
                            className="bg-secondary text-black px-4 py-2 rounded-full hover:bg-tertiary transition w-full"
                        >
                            Sign In
                        </button>
                    </div>
                </div>
            </Modal>
        </>
    )

}

export default SignInPopup


/**
 * Handles Sign In after user enters the credentials
 * @param {string} email
 * @param {string} password
 * @param {function} onClose
 * @param {dict} myData
 */
const handleSignIn = async (email, password, onClose, myData) => {

    try {
        const response = await signUserIn(email,password);
        
        // If user gets signed In
        if (response.status) {
            console.log('myData : ', myData);
            // handlePayment({
            //     city    :   myData.city,
            //     gymName :   myData.gymName,
            //     amount  :   myData.amount,
            //     months  :   myData.months,
            //     user    :   response.user,
            //     image   :   myData.image
            // });
            console.log("User signed in and phone number linked:", response.user);
        }
        onClose();
    } catch (error) {
        console.error('Error signing in:', error.message);
        // Optionally handle the error (e.g., show an error message to the user)
    }
}

const signUserIn = async (email, password) => {
    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;
        console.log('User signed in:', user.uid);
        console.log('User : ', user);
        return {
            status  : true,
            user    : user
        };

    } catch (error) {
        console.error('Error signing in:', error.message);
        // Optionally handle the error (e.g., show an error message to the user)
        return {
            status  :   false,
            user    :   error
        }
    }
}