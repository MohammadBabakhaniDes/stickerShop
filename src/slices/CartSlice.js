import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const initialState = {
    cartItems: localStorage.getItem("cartItems") ?
        JSON.parse(localStorage.getItem("cartItems")) : [],
    itemsPrice: 0
}

const CartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart(state, action) {
            const indexNum = state.cartItems.findIndex(item => item.id === action.payload.id);
            const { quity } = action.payload;
            if (quity === 0) {
                toast.error("از این محصول بیشتر در انبار نیست");
            } else {

                if (indexNum >= 0) {

                    // if (action.payload.cartQty < action.payload.quity) {
                    const { cartQty } = state.cartItems[indexNum];
                    const newCartQty = cartQty + 1;
                    const newQuity = quity - 1;
                    const newAction = { ...action.payload, cartQty: newCartQty, quity: newQuity };
                    state.cartItems[indexNum] = newAction;
                    localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
                    // }
                    //  else {
                    //     toast.error("این تعداد از محصول در انبار موجود نیست.", {position: "bottom-right"});
                    // }
                } else {
                    const newQuity = quity - 1;
                    const newAction = { ...action.payload, cartQty: 1, quity: newQuity };
                    state.cartItems.push(newAction);
                    localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
                }
            }
        },

        decreaseCart(state, action) {
            const indexNum = state.cartItems.findIndex(item => item.id === action.payload.id);
            const { cartQty, quity } = action.payload;
            const newQuity = quity + 1;
            if (cartQty > 1) {
                const newCartQty = cartQty - 1;
                state.cartItems[indexNum] = { ...action.payload, cartQty: newCartQty, quity: newQuity };
                localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
            } else {
                state.cartItems[indexNum] = { ...action.payload, quity: newQuity };
                const newAction = state.cartItems.filter(item => item.id !== action.payload.id);
                state.cartItems = newAction;
                localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
            }
        },

        removeFromCart(state, action) {
            const newAction = state.cartItems.filter(item => item.id !== action.payload.id);
            state.cartItems = newAction;
            localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
        },

        getTotal(state, action) {
            let sum = 0;
            state.cartItems.map(item => {
                sum += item.cartQty * item.price;
            });
            state.itemsPrice = sum;
        }
    }
});

export default CartSlice.reducer;

export const { addToCart, decreaseCart, removeFromCart, getTotal } = CartSlice.actions;

