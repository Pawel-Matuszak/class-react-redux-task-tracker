
import React, { Component } from 'react'

class Button extends Component {
    constructor(props){
        super(props)
    }
    render() {
        return (
            <button style={{backgroundColor: this.props.color}} className="btn" onClick={this.props.onClick}>{this.props.content}</button>
        )
    }
}

export default Button