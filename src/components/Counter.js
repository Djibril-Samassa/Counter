import React from "react"
import "../App.css"

class Counter extends React.Component{
    render(){
        return(

        <div>
            <h1>Counter</h1>
            <h2>Count: {this.props.count}</h2>
            <button className="btn-green" onClick={this.props.increment}>+</button>
            <button className="btn-red" onClick={this.props.substract}>-</button>
        </div>
        )
        
    }
}

export default Counter;