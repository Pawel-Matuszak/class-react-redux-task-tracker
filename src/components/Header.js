import { Component } from "react"
import Buttton from "./Button"

class Header extends Component{
    constructor(props){
        super(props)
    }

    render(){
        return (
            <header className="Header">
                <h1>{this.props.title}</h1>
                <Buttton color={this.props.formState ? "#C7493A" : "#69e4c5"} content={this.props.formState ? "Close" : "Add"} onClick={this.props.toggleForm}/>
            </header>
        )
    }
}

export default Header