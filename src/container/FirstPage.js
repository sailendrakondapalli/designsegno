import React from 'react'

class FirstPage extends React.Component{
    // constructor(){
    //     super()
    //     this.state={
    //         islogged:true
    //     }
    // }

     constructor(){
        super()
        this.state={
            count:0
        }
        this.handleclick=this.handleclick.bind(this)
    }
    handleclick(){
        this.setState(prevState=>{
            return{
                count:prevState.count+1
        }
        })
    }
    render(){
        // let display
        // if(this.state.islogged){
        //     display="in"
        // }
        // else{
        //     display="out"
        // }
        return(
            <div>
                
                
<h4>{this.state.count}</h4>
<button onClick={this.handleclick}>change</button>
            {/* <input type="checkbox" checked={this.props.item.completed}/>
            <p>{this.props.item.text}</p>
            <h4>you are logged{display}</h4> */}
            </div>
        )
    }
}
export default FirstPage