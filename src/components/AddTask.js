import {Component, useState} from "react"
import { connect, useDispatch } from "react-redux"
import {addItem} from "../actions/items"

class AddTask extends Component{
    constructor(props){
        super(props);
        this.state = {
            title: "",
            content: "",
            reminder: false
        }
    }

    onSubmit = (e) => {
        e.preventDefault()
        if (!this.state.title) return;
        if (!this.state.content) return;

        this.props.addItem(this.state.title, this.state.content, this.state.reminder)
        
        this.setState({title: "", content: "", reminder: false})
    }

    render(){
        return (
            <form onSubmit={this.onSubmit} className="addTaskForm">
                <div className="form-control">
                    <label>Title</label>
                    <input type="text" placeholder="Create title" value={this.state.title} onChange={(e)=>this.setState({title: e.target.value})}></input>
                </div>
                <div className="form-control">
                    <label>Content</label>
                    <input type="text" placeholder="Type some text here" value={this.state.content} onChange={(e)=>this.setState({content: e.target.value})}></input>
                </div>
                <div className="form-control">
                    <label>Reminder</label>
                    <input type="checkbox" checked={this.state.reminder} value={this.state.reminder} onChange={(e)=>this.setState({reminder: e.currentTarget.checked})}></input>
                </div>
                <button type="submit">Add task</button>
            </form>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addItem: (title,content, reminder)=>{
            dispatch(addItem(title,content, reminder))
        }
    }
}

export default connect(null, mapDispatchToProps)(AddTask)
