// src/components/MyPaymentComponent.js
import React from 'react';

class PaymentComponent extends React.Component {
  componentDidMount() {
    // Initialize Razorpay
    var options = {
        // "key": "CjoQ8Ha7fmRl817geX3KZLA7", // Enter the Key ID generated from the Dashboard
        "key"   : 'rzp_live_PjuEiFCgxSVySz',
        // "key"   : 'CjoQ8Ha7fmRl817geX3KZLA7',
        "amount": "100", // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
        "currency": "INR",
        "name": "Train Rex", //your business name
        "description": "Test Transaction",
        "image": "https://example.com/your_logo",
        "order_id": "order_9A33XWu170gUtm", //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
        "callback_url": "https://trainrex.org/payment_status",
        "prefill": { //We recommend using the prefill parameter to auto-fill customer's contact information especially their phone number
            "name": "Anjali Gupta", //your customer's name
            "email": "anjalig921@gmail.com",
            "contact": "9971150104" //Provide the customer's phone number for better conversion rates 
        },
        "notes": {
            "userID" : "fQdefqT0RINkLvTKg2ARWqSPhcD2"
        },
        "theme": {
            "color": "#3399cc"
        }
    };
    var rzp1 = new window.Razorpay(options);

    // Handle payment button click
    document.getElementById('rzp-button1').onclick = function(e){
      rzp1.open();
      e.preventDefault();
    }
  }

  render() {
    return (
      <div>
        {/* Payment button */}
        <button id="rzp-button1">Pay2</button>
      </div>
    );
  }
}

export default PaymentComponent;
