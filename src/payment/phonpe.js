import upiImage from "../images/upi.png"; 
import { Link } from "react-router-dom";



const Phonepe=()=>{
    const handleUpiPayment =(event)=>{
        event.preventDefault();
    }
    return(
        <>
<div className="upi-payment">
      <img src={upiImage} alt="UPI" className="upi-image" />
      <form onSubmit={handleUpiPayment} className="upi-form">
        <label htmlFor="upiId">UPI ID:</label>
        <input type="text" id="upiId" name="upiId" required />

        <label htmlFor="amount">Amount:</label>
        <input type="number" id="amount" name="amount" step="0.01" required />
        <Link to={"/paymentdone/"}>
        <button type="submit">Pay via UPI</button>
        </Link>
      </form>
    </div>
       </>
    )
}
export default Phonepe;