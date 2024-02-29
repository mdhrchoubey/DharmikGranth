import image from "../images/granth.jpg";
import { addData } from "../slice/productSlice";
import { useSelector,useDispatch } from "react-redux";
// import { FaArrowLeft } from "react-icons/fa";
// import { FaArrowRight } from "react-icons/fa";
import product from "./product";
import Shlok from "./shlok";




const Granth=()=>{
   
            const mycart=useSelector((state)=>state.cartitems.cart);
    console.log(mycart)
    const dispatch=useDispatch();

    const mydataAdd=(id,name,detail,image,price )=>{
        let productobj={id:id, name:name,price:price,detail:detail,image:image,quantity:1};
        dispatch(addData(productobj));
        
    };
    
    const texts = ['कर्मण्येवाधिकारस्ते मां फलेषु कदाचन |', 
    'मा कर्मफलहेतुर्भुर्मा ते संगोऽस्त्वकर्मणि ||', 
    'कर्मेन्द्रियाणि संयम्य य आस्ते मनसा स्मरन्‌ ।', 
    'इन्द्रियार्थान्विमूढात्मा मिथ्याचारः स उच्यते ॥', 
    'यस्त्विन्द्रियाणि मनसा नियम्यारभतेऽर्जुन ।', 
    'कर्मेन्द्रियैः कर्मयोगमसक्तः स विशिष्यते ॥', 
    'नियतं कुरु कर्म त्वं कर्म ज्यायो ह्यकर्मणः।',
     'शरीरयात्रापि च ते न प्रसिद्धयेदकर्मणः ॥'];
  const interval = 3000;

  const proans=product.map((key)=>{
const g= key.id
    for (let i=g; i<=8; i++) {

        if(g>=5){

            return(
        <>

            


        <div className="cart1">
                <div className="name">{key.name} </div>
                <div><img src={key.image} style={{width:"120px", height:"184px"}} /></div>
                <div className="detail">{key.detail}</div>
                <div className="price">मूल्य : {key.price}</div>
                <button className="buton" onClick={()=>{mydataAdd(key.id, key.detail, key.name, key.image, key.price, key.quantity)}} >Add TO Cart</button>
            </div>
        </>
    )

        }


        
    
           
                
    }


  })
    
    return(
        <>
        <div className="vedas">
            <div className="ved">ग्रंथ</div><br/><br/>
            <div className="vedinfo" >हिंदू धर्म के पवित्र ग्रन्थों को दो भागों में बाँटा गया है- श्रुति और स्मृति। <br/> श्रुति हिन्दू धर्म के सर्वोच्च ग्रन्थ हैं, जो पूर्णत: अपरिवर्तनीय हैं, अर्थात् किसी <br/> भी युग में इनमे कोई  बदलाव नहीं किया जा सकता। स्मृति ग्रन्थों <br/> में देश-कालानुसार बदलाव हो सकता है। </div>
            <br/>
        </div>
        <div >
            <div className="dis">
                <div className="shlok1">
                <div>
                <h5>  श्लोक</h5>
                    {/* <div style={{position:"absolute", marginLeft:"10px", cursor:"pointer"}}><FaArrowLeft/></div> */}
                    {/* <div style={{position:"absolute", marginLeft:"380px", cursor:"pointer"}}><FaArrowRight/></div> */}
                    
                    <Shlok className="shoolk" texts={texts} interval={interval} />
                    {/* <p>कर्मण्येवाधिकारस्ते मां फलेषु कदाचन |</p>
                    <p>मा कर्मफलहेतुर्भुर्मा ते संगोऽस्त्वकर्मणि ||</p> */}
                </div>
                </div>
                <div className="shlok2">
                    <h5>हिन्दू पंचांग </h5>
                <div>
                    <nepaliCalendarData />
                </div>
                </div>
                
            </div>
            {/* <hr  color=" black"  /> */}
            {/* cart item============================================================= */}
            <div className="cartitem">
            {proans}
            </div>
        </div>
        <img className="vedimg" src={image} />
        
        
        </>
    )

}
export default Granth;