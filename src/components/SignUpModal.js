// src/components/SignInPopup.js
import React, { useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, signInWithPhoneNumber, RecaptchaVerifier, PhoneAuthProvider, signInWithCredential, linkWithCredential, updateProfile } from 'firebase/auth';
import { auth, db } from '../config/firebase';
import "../index.css"
import Modal from 'react-modal';
// import { handlePayment } from '../helperFunctions/RazorpayHelper';
import { doc, setDoc } from '@firebase/firestore';

const SignUpPopup = ({myData}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('')
  const [phone, setPhone] = useState('');
  const [verificationCode, setVerificationCode] = useState('');
  const [verificationId, setVerificationId] = useState('');
  const [credential, setCredential] = useState();
  const [showEmailPasswordForm, setShowEmailPasswordForm] = useState(false);
  const [name, setName] = useState('');
  const [age, setAge] = useState(0);

  const [countryCode, setCountryCode] = useState('+91'); // Default country code

  console.log('MyData : ', myData);

  useEffect(() => {
    const initializeRecaptcha = async () => {
      console.log('1');
      if (!window.recaptchaVerifier) {
        try {
          window.recaptchaVerifier = new RecaptchaVerifier(auth, 'recaptcha-container', {
            'size': 'invisible',
            'callback': (response) => {
              console.log("reCAPTCHA solved:", response);
            },
            'expired-callback': () => {
              console.log("reCAPTCHA expired");
            }
          });
          await window.recaptchaVerifier.render();
          console.log('reCAPTCHA initialized');
        } catch (error) {
          console.error("Error initializing reCAPTCHA", error);
        }
      }
    };
    initializeRecaptcha();
  }, []);

  const handlePhoneNumberSubmit = async () => {
    const fullPhoneNumber = `${countryCode}${phone}`;
    const appVerifier = window.recaptchaVerifier;

    console.log('Number : ', fullPhoneNumber);

    if (!window.recaptchaVerifier) {
      console.error("reCAPTCHA verifier is not initialized");
      return;
    }

    try {
      const confirmationResult = await signInWithPhoneNumber(auth, fullPhoneNumber, appVerifier);
      setVerificationId(confirmationResult.verificationId);
      console.log("SMS sent. Verification ID:", confirmationResult.verificationId);
    } catch (error) {
      console.error("Error during phone number verification", error);
    }
  };

  const handleCodeVerification = async () => {
    try {
      setCredential(PhoneAuthProvider.credential(verificationId, verificationCode));
      // await signInWithCredential(auth, credential);
      setShowEmailPasswordForm(true);
    } catch (error) {
      console.error("Error verifying code", error);
    }
  };

  const addUserToDoc = async(user) => {
    try {
      console.log('AddingUserToDoc');
      const userRef = doc(db, 'user', user.uid)
      await setDoc(userRef, {
        name        : name,
        age         : age,
        displayName : name,
        gym         : myData.gymName,
        email       : email
      })
      return true;
    } catch (error) {
      console.log('Error : ', error);
      return error;
    }
  }

  const handleSignUp = async () => {
    try {
      console.log('HandlingSignUp')

      // Check if user has provided all the information
      if (email && password && confirmPassword && name && age) {
        console.log('Yes! All info is provided');

        // Check if passwords match each other
        if (password == confirmPassword) {
          console.log('Yes! Passwords do match');
          // Step 1: Create the user with email and password
          const userCredential = await createUserWithEmailAndPassword(auth, email, password);
          const user = userCredential.user;

          const response = await addUserToDoc(user);

          if (response == true) {
            await updateProfile(user, {
              displayName: name  // Use the name from the input
            });

            await linkWithCredential(user, credential);

            if (user) {
              // handlePayment({
              //   city    :   myData.city,
              //   gymName :   myData.gymName,
              //   amount  :   myData.amount,
              //   months  :   myData.months,
              //   user    :   user,
              //   image   :   myData.image
              // });
              console.log("User signed up and phone number linked:", user);
              alert("Great you've reached here!!")
            }
          }
          else {
            alert ('Error : ', response, '\nTry Again!');
          }          
        }
        else {
          alert('Passwords Do Not match. Try Again!');
        }
      }
        

    } catch (error) {
        console.error("Error signing up or linking phone number", error);
        alert("Error signing up or linking phone number : ", error)
    }
};

  return (
    // <Modal
    //   isOpen={true}
    //   onRequestClose={() => console.log('Closing')}
    //   // contentLabel="Sign In or Sign up"
    //   // className="fixed inset-0 flex items-center justify-center z-50 text-tertiary"
    //   // overlayClassName="fixed inset-0 bg-gray-500 bg-opacity-75"
    // >
      <div className="signin-popup">
        {!showEmailPasswordForm ? (
          <div>
            <h2>Verify Phone Number</h2>
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="Enter phone number"
            />
            <button onClick={handlePhoneNumberSubmit} id="sign-in-button">
              Send Verification Code
            </button>
            <input
              type="text"
              value={verificationCode}
              onChange={(e) => setVerificationCode(e.target.value)}
              placeholder="Enter verification code"
            />
            <button onClick={handleCodeVerification}>Verify Code</button>
            <div id="recaptcha-container"></div>
          </div>
        ) : (
          <div>
            <h2>Sign Up</h2>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter email"
            />
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter password"
            />
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Confirm Password"
            />
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter Name"
            />
            <input
              type="number"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              placeholder="Enter Your Age"
            />
            <button onClick={handleSignUp}>Sign Up</button>
          </div>
        )}
      </div>
    // </Modal>
  );
};

export default SignUpPopup;