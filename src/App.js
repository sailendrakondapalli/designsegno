import React from "react";
import FirstPage from "./container/FirstPage";
import Joke from "./Joke";
import data from "./data.js";
class App extends React.Component{
  constructor(){
    super()
    this.state={
      todo:data
    }
    // this.handleChange=this.handleChange.bind(this)
  }
  render(){
const hello=this.state.todo.map(item=><FirstPage item={item}/>)

return(
    <div>
      {hello}
    </div>
  )
  }
  
}

export default App;