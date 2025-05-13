import React from "react";
import './Sandeep.css'
import {Link} from "react-router-dom"
// import image from "./images/house-solid.svg"
// import collect from "./images/database-solid (1).svg"
// import contact from "./images/phone-solid.svg"
class Nav extends React.Component{
    render(){
        return(
            <div className="nav">
                <div className="nav-home">
                    {/* <img className="nav-img" src={image}/> */}
                    <Link to="/">
                    <p>DESIGNSEGNO</p>
                    </Link>
                </div>
                <div className="nav-home">
                    {/* <img className="nav-img" src={collect}/> */}
                    <Link to="/about">
                    <p>About</p>
                </Link>
                </div>
                <div className="nav-home">
                    {/* <img className="nav-img" src={collect}/> */}
                    <Link to="/collections">
                    <p>Collections</p>
                </Link>
                </div>
                {/* <div>
                    <p>DesignServices</p>
                </div> */}
                <div>
                    {/* <img className="nav-img" src={contact}/> */}
                    <Link to="/Contact">
                    <p>Contact</p>
                </Link>
                </div>
                <div>
                    <Link to="/Book">
                <h4>BookNow</h4>
                </Link>
                </div>
                {/* <div>
                    <p>Search</p>
                </div>
                <div>
                    <p>Share</p>
                </div> */}
                
            </div>
        )
    }
}
export default Nav 