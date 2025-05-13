import React from "react";
import "./Sandeep.css"
class Intro extends React.Component{
    componentDidMount() {
    this.timer = setTimeout(() => {
      this.props.onFinish(); // Auto-hide after 5 seconds
    }, 5000);
  }

  componentWillUnmount() {
    clearTimeout(this.timer);
  }

    render(){
        return(
            <div>
                 <div className="intro-overlay">
        <div className="intro-content">
          <h1>Welcome to DESIGNSEGNO</h1>
          <p>500+ Happy Clients</p>
          <button onClick={this.props.onFinish}>Skip Intro</button>
          </div>
          </div>
            </div>
        )
    }
}
export default Intro