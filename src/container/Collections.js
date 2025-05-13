import React from "react";
import forthimage from "./images/forthimage.jpg"
import thirdimage from "./images/second.jpg"
import fifthimage from "./images/fifth.jpg"
import { Link } from "react-router-dom";

class Collections extends React.Component{
    render(){
        return(
            <div>
                <h1>My Designs</h1>
            <div className="collections">
                <div className="over">
                
                <h1 >Living Room Designs</h1> 
                <img src={forthimage} />
                <Link to="/LivingRoom"><h6 className="overr">View All</h6>
                </Link>
            </div>
            <div className="over">
                <h1 >Bed Room Designs</h1>
                <img src={thirdimage}/>
                <Link to="/BedRoom"><h6 className="overr">View All</h6>
                </Link>
            </div>
            <div className="over">
                <h1 >Dining Hall Designs</h1>
                <img src={fifthimage}/>
                <Link to="/DiningRoom"><h6 className="overr">View All</h6>
                </Link>
            </div>
            </div>
            <div className="collections">
                <div className="over">
                
                <h1 >Rest Room Designs</h1> 
                <img src={forthimage} />
                <Link to="/LivingRoom"><h6 className="overr">View All</h6>
                </Link>
            </div>
            <div className="over">
                <h1 >SwimmingPool Designs</h1>
                <img src={thirdimage}/>
                <Link to="/BedRoom"><h6 className="overr">View All</h6>
                </Link>
            </div>
            <div className="over">
                <h1 >Other Designs</h1>
                <img src={fifthimage}/>
                <Link to="/DiningRoom"><h6 className="overr">View All</h6>
                </Link>
            </div>
            </div>
            </div>
        )
    }
}
export default Collections