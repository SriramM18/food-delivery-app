const { configureStore } = require("@reduxjs/toolkit");
import cartSlice from "./cartSlice";
import locationSlice from "./locationSlice";

const store = configureStore({
  reducer: {
    cart: cartSlice,
    location: locationSlice,
  },
});

export default store;

/**
 *  Create store
 *  - ConfigureStore() - RTK
 *
 *  Provide my store to app
 *  - <Provider store = {store}> <Provider /> - import from react-redux
 *
 *  Created Slice
 *  - createSlice - RTK
 *      name: "",
 *      initialState:,
 *      reducers: {
 *          addItem: (state, action) => {}
 *      }
 *      reducers will contain action and an fucction - here action is addItem and fucntion
 *
 *  Exporting
 *  export default cartSlice.reducer
 *  export const {actions**} = cartSlice.actions
 *
 *  Put that Slice into Store
 *  {
 *      reducer:{
 *          cart:cartSlice,
 *          user:userSlice
 *      }
 *  }
 *
 */
