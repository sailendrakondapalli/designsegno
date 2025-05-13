import React from "react";
import ArNav from "./container/ArNav"
import ArBody from "./container/ArBody"
import ArFooter from "./container/ArFooter"
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import Collections from "./container/Collections";
import LivingRoom from "./container/LivingRoom";
import BedRoom from "./container/BedRoom";
import Dining from "./container/DiningHall";
import Contact from "./container/Contact";
import Book from "./container/Book";
import Intro from "./container/Intro";
import About from "./container/About"
class Sandeep extends React.Component{
      constructor(props) {
    super(props);
    this.state = {
      showIntro: true,
    };
  }

  componentDidMount() {
    // Hide the intro screen after 5 seconds
    this.timer = setTimeout(() => {
      this.setState({ showIntro: false });
    }, 10000);
  }

  componentWillUnmount() {
    clearTimeout(this.timer);
  }

  handleSkipIntro = () => {
    this.setState({ showIntro: false });
  };
    render(){
         const { showIntro } = this.state;
        return(
            <Router>
            <div>
                 {showIntro && <Intro onFinish={this.handleSkipIntro} />}

          <div className={showIntro ? "blur" : ""}></div>
            <ArNav />
            <Routes>
                <Route path="/" element={<ArBody />}/>
                <Route path="/collections" element={<Collections />}/>
                <Route path="/LivingRoom" element={<LivingRoom />}/>
                <Route path="/BedRoom" element={<BedRoom />}/>
                <Route path="/DiningRoom" element={<Dining />}/>
                <Route path="/Contact" element={<Contact />} />
                <Route path="/Book" element={<Book />} />
                <Route path="/About" element={<About />} />
               </Routes>
               <ArFooter />
            </div>
            </Router>
        )
    }
}
export default Sandeep