import { createSlice, nanoid } from "@reduxjs/toolkit";

const contactsInitialState = [
    { id: 0, name: "Victor", tel: "0673872753" },
    { id: 1, name: "Bob", tel: "048876753" },
    { id: 2, name: "Max", tel: "0674564653" },
    { id: 3, name: "Ann", tel: "067387785" },
    { id: 4, name: "Vladimir", tel: "093678547" },
  ];

   const contactsSlice = createSlice({
    name: "contacts",
    initialState: contactsInitialState,
    reducers: {
      addContact: {
        reducer(state, action) {
          state.push(action.payload);
        },
        prepare({name, tel}) {
          return {
            payload: {
                id: nanoid(),
                name,
                tel,
            },
          };
        },
      },
      deleteContact(state, action) {
        return state.filter(task => task.id !== action.payload);
        // const index = state.findIndex(task => task.id === action.payload);
        // state.splice(index, 1);
      },      
    },
  });
  //const contactsReducer = contactsSlice.reducer;
  //export const lsContactsReducer = persistReducer(persistConfig, contactsSlice.reducer);
  
  export const { addContact, deleteContact } = contactsSlice.actions;
  export const contactsReducer = contactsSlice.reducer;