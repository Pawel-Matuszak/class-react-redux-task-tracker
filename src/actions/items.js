const addItem = (title, content, reminder) =>{
  return {
    type: "ADD_ITEM",
    payload: {
      title, content, reminder
    }
  }
}

const deleteItem = (id) =>{
  return {
    type: "DELETE_ITEM",
    payload: { id }
  }
}

const toggleReminder = (id) =>{
  return {
    type: "TOGGLE_REMINDER",
    payload: { id }
  }
}

export {addItem, toggleReminder, deleteItem};