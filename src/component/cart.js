import { useSelector,useDispatch } from "react-redux";
import { CiCirclePlus } from "react-icons/ci";
import { CiCircleMinus } from "react-icons/ci";
import {itemIncreMent, itemDecreMent} from "../slice/productSlice"
import { removeItem } from "../slice/productSlice";




const Cart=()=>{

    const handleSubmit= (e)=>{
        e.preventDefault();
        alert(" ok")
    };
    

    var netamount=0;

    const bucketitem=useSelector((state)=>state.cartitems.cart);
    const dispatch=useDispatch();

    const itemincre=(myid)=>{
        dispatch(itemIncreMent(myid))
    }

    const itemdecre=(myid)=>{
        dispatch(itemDecreMent(myid))
    }

    const productremove=(myid)=>{
        dispatch(removeItem(myid))
    }


    const productCartData=bucketitem.map((key)=>{

        netamount+=key.price*key.quantity;

        return(
            <>
            
            <tr className="table">
                <td> <img src={key.image} style={{width:"200px", height:"200px", marginLeft:"50px"}} /> </td>
                <td>{key.name}</td>
                <td>{key.detail}</td>
                <td>{key.price}</td>
                <td>
                    <CiCirclePlus 
                    onClick={()=>{itemincre(key.id)}}
                    style={{cursor:'pointer', color: 'green'}}/>
                    <span>
                        {key.quantity}
                    </span>
                    <CiCircleMinus
                    onClick={()=>{itemdecre(key.id)}}
                    style={{marginLeft:'3%', cursor:'pointer',color:'red'}}
                    />

                </td>
                <td>
                    {key.price*key.quantity}
                </td>
                <td style={{cursor:"pointer",}} onClick={()=>productremove(key.id)}>
                    Remove
                </td>
                
            </tr>
            
            </>
        )
    })

    return(
        <>
        <br />
        <div className="container">
            <h2>आपके द्वारा चुनी गई पुस्तकों का विवरण </h2>
        </div>
        <div className="cartmenu">
            <table width="80%" align="center" border="2px solid black">
                <tr align="center" border="1px solid black">
                    <td> </td>
                    <td> Book Name</td>
                    <td> Discription</td>
                    <td> Price</td>
                    <td> Quantity</td>
                    <td> Total</td>
                    <td> Remove</td>
                </tr>
                <tr>
                    <td colSpan="7">
                        <hr size="4" color="#fc7303" />
                        
                    </td>
                </tr>
                {productCartData}
            
            </table>
            <table>
            <br/>
            <td  className="total">
                    <div>
                   Total Amount: {netamount}
                    </div>
                    </td>
                    </table>
        </div>

        <div className="checkout-btn">
           
            विक्रय हेतु आगे बड़े  |&nbsp; &nbsp;
            <button onClick={handleSubmit}>Place Order</button>
            <br/><br/><br/>
            
            <a href="http://localhost:3000/veda">Continue Shopping</a><br/>&nbsp;&nbsp;
           
        </div>
        </>
     );
 }
 export default Cart;