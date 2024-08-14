import React, { useState } from 'react';
import Modal from 'react-modal';
import SignUpPopup from '../../components/SignUpModal';
import SignInPopup from './SignInModal';
import icon from '../../assets/TR_logo.png';

/**
 * SignUp/SignIn Modal chooser
 * @param {Object} props - Component props
 * @param {boolean} props.modalIsOpen - State to control if the modal is open
 * @param {function} props.setModalIsOpen - Function to set the modal open state
 * @param {Object} props.myData - Data to be passed to SignUpPopup and SignInPopup
 */
export const UserLoginModal = ({ modalIsOpen, setModalIsOpen, myData }) => {
    const [showSignUpPopup, setShowSignUpPopup] = useState(false);
    const [showSignInPopup, setShowSignInPopup] = useState(false);

    return (
        <>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={() => setModalIsOpen(false)}
                contentLabel="Sign In or Sign up in seconds"
                className="fixed inset-0 flex items-center justify-center z-50 text-tertiary"
                overlayClassName="fixed inset-0 bg-gray-500 bg-opacity-75"
            >
                <div className="bg-secondary rounded-lg shadow-lg w-full max-w-4xl relative flex">
                    {/* Close button */}
                    <button
                        onClick={() => setModalIsOpen(false)}
                        className="absolute top-4 right-4 text-tertiary hover:text-black transition text-4xl"
                    >
                        &times;
                    </button>
                    {/* Left segment with logo */}
                    <div className="w-1/2 flex items-center justify-center p-4">
                        <img src={icon} alt="Logo" className="w-full h-full object-contain shadow-none" />
                    </div>
                    {/* Right segment with buttons */}
                    <div className="w-1/2 flex flex-col items-center justify-center space-y-4 p-4">
                        <button
                            onClick={() => handleSignIn(setModalIsOpen, setShowSignInPopup)}
                            className="bg-tertiary text-black px-4 py-2 rounded-full hover:bg-primary hover:text-tertiary transition w-3/4"
                        >
                            Sign In
                        </button>
                        <button
                            onClick={() => handleSignUp(setModalIsOpen, setShowSignUpPopup)}
                            className="bg-tertiary text-black px-4 py-2 rounded-full hover:bg-primary hover:text-tertiary transition w-3/4"
                        >
                            Sign Up
                        </button>
                    </div>
                </div>
            </Modal>
            {/* Conditionally render SignUpPopup */}
            {showSignUpPopup && (
                <SignUpPopup myData={myData} />
            )}
            {/* Conditionally render SignInPopup */}
            {showSignInPopup && (
                <SignInPopup onClose={() => setShowSignInPopup(false)} myData={myData}/>
            )}
        </>
    );
};

/**
 * Handles User Sign In
 * @param {function} setModalIsOpen - Function to set the modal open state
 * @param {function} setShowSignInPopup - Function to set the sign-in popup state
 */
const handleSignIn = (setModalIsOpen, setShowSignInPopup) => {
    console.log('Sign In button clicked');
    // Add your sign in logic here
    setModalIsOpen(false);
    setShowSignInPopup(true);
};

/**
 * Handles User Sign Up
 * @param {function} setModalIsOpen - Function to set the modal open state
 * @param {function} setShowSignUpPopup - Function to set the sign-up popup state
 */
const handleSignUp = (setModalIsOpen, setShowSignUpPopup) => {
    console.log('Sign Up button clicked');
    // Add your sign up logic here
    setModalIsOpen(false);
    setShowSignUpPopup(true);
};
