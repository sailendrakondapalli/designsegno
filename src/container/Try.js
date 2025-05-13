import React from "react";
import Conditional from "./Conditional";
class Try extends React.Component{
    constructor(){
        super()
        this.state={
            isLoading:true
        }
    } 
    componentDidMount(){
        setTimeout(()=>{
            this.setState({
                isLoading:false
            })
        },3000)
    }

    render(){
        return(
            <div>
                {this.state.isLoading?<h1>Loading...</h1>:<Conditional/>}
            </div>
        )
    }
}
export default Try