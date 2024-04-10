import { BrowserRouter, Routes, Route } from "react-router-dom";
import Ramayan from "./component/Ramayan";
import Layout from "./component/Layout";
import Maharabhart from "./component/Maharbharat";
import Veda from "./component/Veda";
import Upnishad from "./component/Upnishad";
import Granth from "./component/Granth";
import Cart from "./component/cart";
import Buynow from "./payment/buynow";
import Payment from "./payment/Pymnt";
import Search from "./component/search";
import Paymentdone from "./payment/paymentdone";
import Login from "./Login/Login";


const App=()=>{
  return(
    <>
    {/* <h1>ॐ</h1> */}
    <section>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
        <Route index element={<Veda/>}/>
        <Route path="ramayan" element={<Ramayan/>}/>
        <Route path="mahabharat" element={<Maharabhart/>}/>
        <Route path="veda" element={<Veda/>}/>
        <Route path="upnishad" element={<Upnishad/>}/>
        <Route path="granth" element={<Granth/>}/>
        <Route path="cartdisplay" element={<Cart/>}/>
        <Route path="buynow/" element={<Buynow/>}/>
        <Route path="payment/" element={<Payment/>}/>
        <Route path="homeee" element={<Veda/>}/>
        <Route path="search" element={<Search/>}/>
        <Route path="paymentdone/" element={<Paymentdone/>}/>
        <Route path="login/" element={<Login />}/>
        <Route path="loginto/" element={<Veda/>}/>

        </Route>
      </Routes>
      </BrowserRouter>
    </section>
    </>
  );
}

export default App;
