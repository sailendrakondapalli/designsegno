// import { response } from "express";
import React from "react";
class Fetch extends React.Component{
    constructor(){
        super()
        this.state={
            loading:false,
            character:{}
        }
    }
    componentDidMount(){
        this.setState({loading:true})
        fetch("https://api.github.com/users")
        .then(response=>response.json())
        .then(data=>{
            this.setState({
                loading:false, 
                character:data[0]
            })
        })
    }
    render(){
        const text=this.state.loading?"loading...":this.state.character.type;
        return(
            <div>
                <p>{text}</p>
            </div>
        )
    }
}
export default Fetch