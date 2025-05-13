import React from "react";
import firstimage from "./images/firstimg.jpeg"
import secondimage from "./images/secondimage.jpg"
import thirdimage from "./images/second.jpg"
import forthimage from "./images/forthimage.jpg"
import fifthimage from "./images/fifth.jpg"
import logoo from "./images/logoo.jpg"
import { Link } from "react-router-dom";
import "./Sandeep.css"
class Body extends React.Component{
    render(){
        return(
            <div>
                
                    
                 
                    <div className="image-container">
                        <img src={firstimage}/>
                        <h1 className="overlay-text">DESIGNSEGNO</h1>
                    </div>

                    <div className="whydesignsegno">
                    <div><h2 className="whyd">Why Designsegno ?</h2>
                    <h3 className="whydd">At Designsegno, we believe that architecture is more than just designing buildings
                         – it’s about crafting spaces that resonate with the people who inhabit them. Guided by a passion for innovative design and a commitment to excellence, we’ve established ourselves as
                         a leading architectural firm known for blending aesthetic beauty with functional precision.</h3>
                    <div className="bookno">
                    <Link to="/Book" className="bookn" ><h1>BookNow</h1></Link></div>
                    </div>
                    <img src={logoo} />
                    
                    </div>

                    <hr></hr>
                       <div className="booknoo">
<h1>Our Projects</h1>
</div>
                    <div className="image-container">
                        <img src={secondimage}/>
                        <h1 className="overlay-text">LIVING ROOM</h1>
                        <Link to="/LivingRoom" >
                        <h5 className="text">More Living Room Projects</h5>
                        </Link>
                        
                    </div>
                <div className="background"></div>
                    <div className="image-container">
                        <img src={thirdimage}/>
                        <h1 className="overlay-text">BED ROOM</h1>
                        <Link to="/BedRoom">
                        <h5 className="text">More Bed Room Projects</h5>
                        </Link>
                        
                    </div>
                    <hr></hr>

                    <div className="image-container">
                        <img src={forthimage}/>
                        <h1 className="overlay-text">LIVING ROOM</h1>
                        <h5 className="text">More Living Room Projects</h5>
                    </div>
                    <hr></hr>

                    <div className="image-container">
                        <img src={fifthimage}/>
                        <h1 className="overlay-text">DINING ROOM</h1>
                        <Link to="/DiningRoom">
                        <h5 className="text">More Dining Room Projects</h5>
                        </Link>
                        
                    </div>
                    <hr></hr>
                    
            </div>
        )
    }
}
export default Body 