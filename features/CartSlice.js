import { createSlice } from "@reduxjs/toolkit";

const getInitialCart = () => {
    if (typeof window !== "undefined") {
        const savedCart = localStorage.getItem("cart");
        return savedCart ? JSON.parse(savedCart) : [];
    }
    return []; 
};


const initialState = {
    cart: getInitialCart(),
};

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        setCart: (state, action) => {
            state.cart = action.payload.slice();
            localStorage.setItem("cart", JSON.stringify(state.cart));
        },
        addToCart: (state, action) => {
            const existingItem = state.cart.find((item) => item.id === action.payload.id);

            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                state.cart.push({ ...action.payload, quantity: 1 });
            }

            localStorage.setItem("cart", JSON.stringify(state.cart));
        },
        removeFromCart: (state, action) => {
            state.cart = state.cart.filter((item) => item.id !== action.payload);
            localStorage.setItem("cart", JSON.stringify(state.cart));
        },
        updateQuantity: (state, action) => {
            const { id, amount } = action.payload;
            const existingItem = state.cart.find((item) => item.id === id);
        
            if (existingItem) {
                existingItem.quantity += amount;
        
                if (existingItem.quantity < 1) {
                    state.cart = state.cart.filter((item) => item.id !== id);
                }
            }
        
            localStorage.setItem("cart", JSON.stringify(state.cart));
        },        
    },
});

export const { addToCart, removeFromCart, setCart, updateQuantity } = cartSlice.actions;
export default cartSlice.reducer;
