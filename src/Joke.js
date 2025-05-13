import React from "react"
class Joke extends React.Component{
   
    render(){
return(
        <div>
            <h1>{this.props.question}</h1>
            <h1>{this.props.punchline}</h1>

        </div>
    )
    }
    
}
export default Joke