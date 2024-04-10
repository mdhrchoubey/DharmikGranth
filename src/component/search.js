import product from "./product";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addData } from "../slice/productSlice";




const Search=()=>{

    const [myproduct, setMyproduct]=useState("");
    var mystatus=false;
    const mycart=useSelector((state)=>state.cartitems.cart);

    const dispatch=useDispatch();
    const mydataAdd=(id,name,detail,image,price )=>{
        let productobj={id:id, name:name,price:price,detail:detail,image:image,quantity:1};
        dispatch(addData(productobj));
        
    };
    const dispalyProduct=(e)=>{
        setMyproduct(e.target.value);
    }
    const proanswer=product.map((key)=>{
        let mystr=key.nam;
        let status=mystr.toLocaleLowerCase().includes(myproduct.toLocaleLowerCase());
        if(status){
            mystatus=true;
        
        return(
            <>
            
            <div className="cart1">
                <div className="name">{key.name} </div>
                <div><img src={key.image} style={{width:"120px", height:"184px"}} /></div>
                {/* <div className="price">{key.nam}</div> */}
                <div className="detail">{key.detail}</div>
                <div className="price">मूल्य : {key.price}</div>
                <button className="buton" onClick={()=>{mydataAdd(key.id, key.detail, key.name, key.image, key.price, key.quantity)}} >Add TO Cart</button>
            </div>
            
            
            </>
        )
        }
    })


    return(
        <>
        <center>
        <h3>Search book here</h3>
        Enter Name:<input type="text" style={{width:"300px"}}
        value={myproduct} onChange={dispalyProduct}/> 
        </center>
        <br/><br/>
        <div className="cartitem">
            {proanswer}
            </div>
            
        {mystatus? "": <h2>No Data Found</h2>}
       
        </>
    )
};
export default Search;