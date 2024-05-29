import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web

const persistConfig = {
    key: 'value',
    storage,
    whitelist: 'value'
  };
  
  const persistedReducer = persistReducer(persistConfig, userSlice);

 

  export const Store = configureStore({
    reducer: {
        users : persistedReducer,
    }
})

export const persistor = persistStore(Store);

// export const Store = configureStore({
//     reducer: {
//         users : userSlice
//     }
// })