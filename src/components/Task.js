import { Component } from "react";
import {FaTimes} from "react-icons/fa"
import { toggleReminder, deleteItem } from "../actions/items"
import { connect } from "react-redux";

class Task extends Component{
    constructor(props){
        super(props);
        this.state = {
            task: this.props.task,
        }
    }
    
    toggleReminder = (id) =>{
        this.props.toggleReminder(id)
        this.forceUpdate();
    }

    deleteItem = (id) =>{
        this.props.deleteItem(id)
    }

    render(){
        return (
            <div className={`task ${this.state.task.reminder ? "reminder" : ""}`} onDoubleClick={()=>this.toggleReminder(this.state.task.id)}>
                <h3>{this.state.task.title} <FaTimes style={{color:"red", cursor: "pointer", fontSize: "25px"}} onClick={()=>this.deleteItem(this.state.task.id)}/></h3>
                <p>{this.state.task.content}</p>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        toggleReminder: (id) => {
            dispatch(toggleReminder(id))
        },
        deleteItem: (id) => {
            dispatch(deleteItem(id))
        }
    }
}

export default connect(null, mapDispatchToProps)(Task)