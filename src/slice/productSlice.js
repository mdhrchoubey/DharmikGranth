import { createSlice } from "@reduxjs/toolkit";

const ProductSlice=createSlice({
    name:"cartitems",
    initialState:{
        cart:[],
    },
    reducers:{
        addData:(state,action)=>{
                const myitems=state.cart.filter((key)=>key.id==action.payload.id);
                 if(myitems.length>=1){
                     alert("already added")
                 }else{
                    
                    
                        
                    state.cart.push(action.payload); 

                                  
                }
            },
      

      itemIncreMent:(state, action)=>{
    for (var i=0; i<state.cart.length; i++) 
    {
            if(state.cart[i].id==action.payload)
            {
                state.cart[i].quantity++;
            }
    }
},
itemDecreMent:(state, action)=>{
    for (var i=0; i<state.cart.length; i++)
     {
            if(state.cart[i].id==action.payload)
            {
                if(state.cart[i].quantity>1)
                {
                    state.cart[i].quantity--;
                }
            }
    }
},
removeItem:(state,action)=>{
    state.cart=state.cart.filter(item=>item.id!=action.payload);
    
},

emptyCart:(state)=>{
    state.cart=[];
}

    
    },
});
export default ProductSlice.reducer;

export const {addData,removeItem,UpdateQuantity,itemIncreMent,itemDecreMent, emptyCart}=ProductSlice.actions;









// state.cart.push(action.payload); 






// Action creators are generated for each case reducer function
      
//     }
// })
// export default ProductSlice.reducer;
// export const {addData,itemIncreMent,itemDecreMent}=ProductSlice.actions;










// UpdateQuantity:(state,action)=>{
    //      let tempCart= [...state.cart];
    //      let targetProduct =tempCart[action.payload.index];
    //      targetProduct.quantity=action.payload.count;
    //      state.cart=tempCart;
    //    },



// addData:(state,action)=>{
//     const myitems=state.cart.filter((key)=>key.id==action.payload.id);
//      if(myitems.length>=1){
//          alert("already added")
//      }else{
//         state.cart.push(action.payload); 
//    }
// },
// itemIncreMent:(state,action)=>{
//     let index = state.cart.indexOf(action.payload)
//     let olditem=state.cart[index];
//     let newitem={...olditem};
//     newitem.count+=1;
//     state.cart[index]=newitem;
// },
// removeItem:(state,action)=>{
//     let index=state.cart.findIndex((item)=>item.id===action.payload);
//     state.cart.splice(index,1);
// },


// itemDecreMent:(state, action)=>{
//     for (var i=0; i<state.cart.length; i++)
//      {
//             if(state.cart[i].id==action.payload)
//             {
//                 if(state.cart[i].quantity>1)
//                 {
//                     state.cart[i].quantity--;
//                 }
//             }
//     }
// },














// itemIncreMent:(state, action)=>{
//     for (var i=0; i<state.cart.length; i++) 
//     {
//             if(state.cart[i].id==action.payload)
//             {
//                 state.cart[i].quantity++;
//             }
//     }
// },
// itemDecreMent:(state, action)=>{
//     for (var i=0; i<state.cart.length; i++)
//      {
//             if(state.cart[i].id==action.payload)
//             {
//                 if(state.cart[i].quantity>1)
//                 {
//                     state.cart[i].quantity--;
//                 }
//             }
//     }
// },







// {
//     state.cart=[...state.cart,action.payload]
// }else{
//    const index = state.cart.indexOf(myitems[0]);
//    if (index === -1) {  
//       console.log("Not found!");  
//    } else { 
//       console.log(`Found! ${index}`);    
//       let quantity=parseInt(myitems[0].quantity)+parseInt(action.payload.quantity)
//       state.cart[index]= { ...myitems[0],quantity : `${quantity}`}
//   }
// }


// removeItem:(state, action) => {
//     return state.cart = state.cart.filter((item) => item.id !== action.payload)
//   },
//  clearCart:(state)=>{
//       state.cart=[]
//  }