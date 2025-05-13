import React from "react";
class Form extends React.Component{
    constructor(){
        super()
        this.state={
            firstname:""
        }
        this.handler=this.handler.bind(this)
    }
    handler(event){
        this.setState({
            [event.target.name]:event.target.value
        })
    }
    render(){
        return(
            <div>
                <input type="text" name="firstname" value={this.state.firstname} placeholder="Firstname" onChange={this.handler}/>
            <h1>{this.state.firstname}</h1>
            </div>
        )
    }
}
export default Form