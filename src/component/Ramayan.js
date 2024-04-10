import image from "../images/upnishad.jpg";
import { addData } from "../slice/productSlice";
import { useSelector,useDispatch } from "react-redux";
// import { FaArrowLeft } from "react-icons/fa";
// import { FaArrowRight } from "react-icons/fa";
import product from "./product";
import Shlok from "./shlok";



const Ramayan=()=>{
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
    for (let i=g; i<=16; i++) {
    
    if(g>=13){
    
        return(
    <>
    
        
    
    
    <div className="cart1">
            <div className="name">{key.name} </div>
            <div><img className="cartimage" src={key.image} style={{width:"120px", height:"184px"}} /></div>
            {/* <div className="price">{key.nam}</div> */}
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
        <div className="ved">उपनिषद </div><br/><br/>
        <div className="vedinfo" >उपनिषद् हिन्दू धर्म के महत्त्वपूर्ण श्रुति धर्मग्रन्थ हैं। <br/> ये वैदिक वाङ्मय के अभिन्न भाग हैं <br/> हर एक उपनिषद किसी न किसी वेद से जुड़ा हुआ है। <br/> इनकी संख्या लगभग १०८ है, किन्तु मुख्य उपनिषद १३ हैं</div>
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
    <img className="vedimg" src={image} width="490px" />
    
    
    
    </>
    )
    
    }
export default Ramayan;