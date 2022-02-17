import React from 'react';

import useScript from '../Hooks/useScript';
import axios from 'axios';
import { useNavigate } from 'react-router';



function PaymentButton({course}) {
    useScript("https://pay.sandbox.datatrans.com/upp/payment/js/datatrans-2.0.0.js");

    const onPayment = async ({email}) => {
    
        const reqData = { email };
        const { data } = await axios.post('https://us-central1-easymatura-f5c59.cloudfunctions.net/paymentFunction/api/buyMath', reqData);
        //open Lightbox
        console.log(data.transactionId);
        window.Datatrans.startPayment({
              transactionId:  data.transactionId,
              'opened': function() {console.log('payment-form opened');},
              'loaded': function() {console.log('payment-form loaded');},
              'closed': function() {console.log('payment-form close');},
              'error': function() {console.log('error');}
        });
    }
    
    //TODO data from outside
    const email = "jan.matter@outlook.com";

    return (
        <div>
            <button className="btn btn-primary" onClick={(email) => onPayment(email)} >Jetzt Kaufen</button>
        </div>
    );
}

export default PaymentButton;