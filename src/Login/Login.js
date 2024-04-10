import { Link } from "react-router-dom";
import Veda from "../component/Veda";


const Login=()=>{
    return(
        <>
        <section className="loginform">
        <div class="wrapper">
        <div class="card-switch">
            <label class="switch" >
               <input class="toggle" type="checkbox" />
               <span class="slider"></span>
               <span class="card-side"></span>
               <div class="flip-card__inner">
                  <div class="flip-card__front">
                     <div class="title">Log in</div>
                     <form action="" class="flip-card__form" >
                        <input type="email" placeholder="Email" name="email" class="flip-card__input" />
                        <input type="password" placeholder="Password" name="password" class="flip-card__input" />
                        <Link to={"/loginto/"}>
                        <button class="flip-card__btn">Let`s go!</button>
                        </Link>
                     </form>
                  </div>
                  <div class="flip-card__back">
                     <div class="title">Sign up</div>
                     <form action="" class="flip-card__form">
                        <input type="name" placeholder="Name" class="flip-card__input" />
                        <input type="email" placeholder="Email" name="email" class="flip-card__input" />
                        <input type="password" placeholder="Password" name="password" class="flip-card__input" />
                        <Link to={"/loginto/"}>
                        <button class="flip-card__btn" >Confirm!</button>
                        </Link>
                     </form>
                  </div>
               </div>
            </label>
        </div>   
   </div>  
   </section>
     </> 
    )
};

export default Login;