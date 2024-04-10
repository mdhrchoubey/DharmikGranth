import { useState } from "react";
import Credit from "./creditcard";
// import Upi from "./upi";
import Cod from "./cod";
import Phonepe from "./phonpe";
import Upi from "./upi";



const Payment=()=>{

    
    var myans="";
    const [paymeth, setPaymeth]=useState("");
    const myPayment=(e)=>{
        let myval=e.target.value;
        setPaymeth(myval);
    }

    switch(paymeth){
        case 'Credit':  
            myans = <Credit />  ; break;
        case 'UPI':          
            myans = <Upi /> ;break;
        case 'COD':            
            myans = <Cod /> ;break;
        case 'phonpe':
            myans= <Phonepe /> ;break;
        // default:                                  
        //     myans = `Select Payment Method` ;                            
    }



    return(
        <>
        <center>
        <h1 > Choose your payment method</h1></center>
        <hr />
         <div className="paymentsection">
        
        
        <form >
          <input type='radio' id='credit' name='payment' value='Credit' onChange={myPayment}/>
          <label htmlFor='credit'>Credit/Debit Card </label><br/><br/>
          <input type='radio' id='upi' name='payment' value='UPI' onChange={myPayment}/>
          <label htmlFor='upi'>UPI (Unified Payment Interface) </label><br/><br/>
          <input type='radio' id='phonpe' name='payment' value='phonpe' onChange={myPayment}/>
          <label htmlFor='phonepe'>Phonpe </label><br/><br/>
          <input type='radio' id='cod' name='payment' value='COD' onChange={myPayment}/>
          <label htmlFor='cod'>Cash On Delivery </label><br/><br/>
          
        </form>
        
        <div className="paymentdetails">
        {myans}
        </div>
        
        </div>
        <div style={{height:"100px"}}>

        </div>
     
        
        </>
    )
};
export default Payment;