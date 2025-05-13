import React from "react";
class Log extends React.Component{
    constructor(){
        super()
        this.state={
            isLoged:false
        }
        this.handle=this.handle.bind(this)
    }
    comp
    handle(){
        this.setState(prevState=>{
            return{
                isLoged:!prevState.isLoged
            }
        })
    }
    render(){
        let buttonDisplay=this.state.isLoged?"login":"logout"
        let textDisplay=this.state.isLoged?"logout":"login"
        return(
            <div>
                <button onClick={this.handle}>{buttonDisplay}</button>
                <h1>{textDisplay}</h1>
            </div>
        )
    }
}
export default Log





