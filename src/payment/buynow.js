
import { Link } from "react-router-dom";



const Buynow=()=>{

    

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
                <input type='number' name='pin' maxLength='6' placeholder='Pin Code' required/><br/><br/><br/>
                <Link to={"/payment/"}>
                <button>Payment</button> 
                </Link>
                
            </div>
            </section>








       
        </>
    )
}

export default Buynow;































