import { Component } from "react"
import Header from "./components/Header"
import Task from "./components/Task"
import AddTask from "./components/AddTask"
import { connect } from "react-redux"

class App extends Component {
  constructor(){
    super();
    this.state = {
      displayForm: false,
    }
  }

  toggleForm = () =>{
    this.setState({displayForm: !this.state.displayForm});
  }

  render(){
    return (
      <div className="App">
      <Header title="Task tracker" toggleForm={this.toggleForm} formState={this.state.displayForm}/>
      {this.state.displayForm ? <AddTask/> : ""}
        
      {this.props.items.length>0 ?
        <div className="taskDiv">
          {this.props.items.map((item) => (
              <Task task={item} key={item.id}/>
          ))}
        </div>
      : <p style={{textAlign:"center", fontSize: "1.5rem"}}>No Tasks</p>}
      </div>
    );
  };
  
}

const mapStateToProps = (state) => {
  return{
    items: state.items
  }
}

export default connect(mapStateToProps)(App);
