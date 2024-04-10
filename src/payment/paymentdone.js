import { Link } from "react-router-dom";
import Loader from "./loader";
import { useEffect, useState } from "react";
import { emptyCart } from "../slice/productSlice";
import { useDispatch } from "react-redux";



const Paymentdone=()=>{
    const dispatch=useDispatch();
    const [isLoading, setIsloading] = useState(true);
    useEffect(() => {
        setTimeout(() => {
            setIsloading(false);
            dispatch(emptyCart())
            
        }, 3000);
    }, []);

    return(
        <>
        {isLoading ? (
            <div>
                <h1 style={{marginTop:"50px", marginLeft:"580px"}}>
                    payment has been processed
                </h1>
                <p>
                    <Loader/>
                </p>
            </div>):(
                <div style={{height:"300px"}}>
                    <h1 className="return" style={{marginTop:"250px", marginLeft:"450px"}}>
                        Your product will be dileverd in 4 to 5 working days
                        <br/><br/><br/>

                        Thanks for shopping  with us!<br/>
                        <br/>
                        Return to main page    <Link className="link" to="/veda/">home </Link>

                    </h1>
                    
                </div>
            )}
        
        </>
    )
}
export default Paymentdone;