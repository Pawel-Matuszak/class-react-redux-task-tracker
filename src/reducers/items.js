import {v4 as uuid} from "uuid";

const items = (state=[{id: 1231, title: "aa", content: "aa", reminder: true}], action)  =>{
  switch(action.type){
    case "ADD_ITEM":
      return [...state, {
        id: uuid(),
        title: action.payload.title,
        content: action.payload.content,
        reminder: action.payload.reminder, 
      }];

    case "DELETE_ITEM":
      return state.filter(e=>e.id!=action.payload.id);

    case "TOGGLE_REMINDER":
      return state.map(e=>{
        if(e.id==action.payload.id) e.reminder = !e.reminder;
        return e;
      });
      
    default:
      return state;
  }
}

export default items;