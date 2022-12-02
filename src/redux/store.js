import { configureStore } from "@reduxjs/toolkit";
import { contactsReducer } from "./contactsSlice";
import { filterReducer } from "./filterSlice";
//import { contactsListReducer } from "./reducer";

export const store = configureStore({
  reducer: {
    //contacts:  contactsListReducer,    
    contacts: contactsReducer,
    filter: filterReducer,
  },
});

