import { useState } from "react";
import Credit from "./creditcard";
import Upi from "./upi";
import Cod from "./cod";
import Phonepe from "./phonpe";
import { useNavigate } from "react-router-dom";



const Buynow=()=>{
    const mynav=useNavigate();
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
        case 'Phonpay':
            myans= <Phonepe/>
        // default:                                  
        //     myans = `Select Payment Method` ;                            
    }

    const pay=()=>{
        mynav(paymeth)
    }
    

    return(
        <>
        <section className="buynowSection">
            <div className=" add">
            <h2>Enter Your Shipping  Details :</h2>
            <br/><br/>
                Name :  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                
                <input type='text' name='name' id='name' placeholder='Your Full Name' required></input><br/><br/>
                Name : &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <input type='text' name='name' placeholder='Your Full Name' required/><br/><br/>
                Address :&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                 <textarea rows='2' cols='50' name='address' placeholder='Enter your address' required></textarea><br/><br/>
                Address Line1 : &nbsp;&nbsp;&nbsp;&nbsp;
                <input type='text' name='add1' placeholder='Address Line1' required/><br/><br/>
                Address Line2 : &nbsp;&nbsp;&nbsp;&nbsp;
                <input type='text' name='add2' placeholder='Address Line2' /><br/><br/>
                City : &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <input type='text' name='city' placeholder='City' required/><br/><br/>
                State : &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <input type='text' name='state' placeholder='State' required/><br/><br/>
                Country : &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <select name='country'>
                                <option value='India'> India </option>
                                <option value='USA'> USA </option>
                          </select><br/><br/>
                Pincode : &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <input type='number' name='pin' minLength='6' maxLength='6' placeholder='Pin Code' required/><br/><br/><br/>

                <button onClick={pay}>Payment</button> 

                
            </div>








        <div className="paymentsection">
        <h1> Choose your payment method</h1>
        
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
        {myans}

        </div>
        </section>
        </>
    )
}

export default Buynow;































