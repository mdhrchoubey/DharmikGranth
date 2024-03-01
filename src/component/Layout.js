import { Link, Outlet } from "react-router-dom";
import { FaShoppingBag } from 'react-icons/fa';
import om from "../images/om.gif"
import { useSelector } from "react-redux";




const Layout=()=>{
    const mycartData=useSelector((state)=>state.cartitems.cart);
    const proCount=mycartData.length;
    return(
        <>
        <div className="header">
            <h6>Privacy policy</h6>
            <h6>for any enqury conact us </h6>
        </div>
        <div className="nav">
            
            <Link to="homeee"><div className="home"><img src={om} style={{width:"30px"}} /></div></Link>    
            <div className="navbarmain">
            <Link className="link" to="veda">वेद </Link>
            <Link className="link" to="granth">ग्रंथ </Link>
            <Link className="link" to="upnishad">उपनिषद </Link>
            <Link className="link" to="ramayan">रामायण </Link>
            <Link className="link" to="mahabharat">महाभारत  </Link>
            </div>
            <Link to="cartdisplay"> <div>
             <div className="carttt" style={{cursor:"pointer"}}><FaShoppingBag />
             {proCount==0?"":proCount}</div>
            </div>
            </Link>
            
        </div>
        <div className="content">
            <Outlet />
        </div>
        <div className="foot">
            <h3>हमसे बात करने के लिए मेल करें</h3>
            <h3 className="raam">जय श्री राम</h3> 
            <h3>dharmikgranth@gmail.com</h3>
        </div>
        </>
    )
}

export  default Layout;