// import { addContact, deleteContact } from "./actions";

//   const contactsInitialState = [
//     { id: 0, name: "Victor", tel: "0673872753" },
//     { id: 1, name: "Bob", tel: "048876753" },
//     { id: 2, name: "Max", tel: "0674564653" },
//     { id: 3, name: "Ann", tel: "067387785" },
//     { id: 4, name: "Vladimir", tel: "093678547" },
//   ];
// export const contactsListReducer = (state = contactsInitialState, action) => {
//   switch (action.type) {
//     case addContact.type:
//       return [...state, action.payload];
//     case deleteContact.type:
//       return state.filter(contact => contact.id !== action.payload);    
//     default:
//       return state;
//   }
// };
//------------worked- refactored
  // const filtersInitialState = {
  //   query: "",
  // };
// export const filtersReducer = (state = {query: ""}, action) => {
//   // Reducer code
// };

// export const contactsListReducer = (state = contactsInitialState, action) => {
//   switch (action.type) {
//     case addTask.type:
//       return [...state, action.payload];
//     case deleteTask.type:
//       return state.filter(task => task.id !== action.payload);
//     case toggleCompleted.type:
//       return state.map(task => {
//         if (task.id !== action.payload) {
//           return task;
//         }
//         return { ...task, completed: !task.completed };
//       });
//     default:
//       return state;
//   }
// };