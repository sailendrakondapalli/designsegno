import React from "react";
import logoo from "./images/logoo.jpg"
class About extends React.Component{
    render(){
        return(
            <div>
            <div className="abouttext">
                <div>
                <h1>DESIGNSEGNO</h1>
                </div>
                <div>
                <p>
                    Designsegno, where architectural dreams
                     take shape under the guidance of Principal
                      Architect Sharma .Y.V.K. With a diverse
                       background blending inspiration, education,
                        and hands-on experience, He bring a fresh 
                        perspective to every project. Grounded in
                         a philosophy that values the essence of
                          each site, the narrative of every client,
                           and his own artistic vision, He is a
                            graduate of Maulana Azad National
                             Institute of Technology (MANIT). His
                              passion for architecture was 
instilled by his artist father,fostering a deep appreciation for 
design. With notable experience at Nandu Associates, He has honed his skills
on projects ranging from luxury residences to corporate spaces, including interior
design work for Corporate offices and contributions to urban development projects 
                            in Hyderabad.
                </p>
                </div>
            </div>
            <div className="aboutlogo-text">
                <div className="aboutsegno-img">
                   <img src={logoo}/> 
                </div>
                <div className="about-text">
                <ol>
                    <li>Distinctive Designs, Exceptional Quality: Designsegno is your go-to destination for unique designs and top-notch quality in architecture and interior design.</li>
                    <li>On-Time, Every Time: Punctuality is our promise. Expect timely handovers and transparent communication throughout your project journey.</li>
                    <li>Tailored Solutions, Personalized Service: Our team works closely with you to understand your needs, ensuring that every detail reflects your personality and desires.</li>
                    <li>Renovations Made Easy: From renovations to full-scale remodeling, we handle it all, making the process hassle-free for you.</li>
                    <li>Innovation and Inspiration: Get ready to be inspired. Our designs are innovative, functional, and designed to enhance your everyday life.</li>
                    <li>Skilled Team, High-Quality Results: With a skilled team and a commitment to excellence, we deliver results that exceed expectations.</li>
                    <li>Client Comfort First: Your comfort and satisfaction are our priority. Experience the difference with Designsegno.</li>
                    <li>On-Time Delivery, Every Time: Count on us for on-time delivery, every time. Your project will be completed according to schedule, without compromise.</li>              
                </ol>
                </div>
            </div>

            <div className="mission-vision">
                <div className="mission">
                  <div className="ourmission"> <p>O U R    M I S S I O N</p></div> 
                    <h1>Designing Spaces with Purpose and Passion</h1>
                    <p>At Designsegno, our mission is to create inspiring, functional, and sustainable spaces that resonate with the unique vision of each client. We strive to blend creativity with practicality, ensuring that every design reflects innovation, quality, and attention to detail. Through collaboration, excellence, and a commitment to exceeding expectations, we aim to transform spaces into timeless works of art that enhance the way people live, work, and experience their surroundings.</p>
                </div>
                <div className="vision">
                    <div className="ourvision">
                    <p>O U R    V I S I O N</p></div>
                    <h1>Redefining the Future of Architecture and Design</h1>
                    <p>Our vision at Designsegno is to be a leading force in the architecture and design industry, shaping spaces that inspire, innovate, and elevate. We aspire to set new standards in design excellence by continuously pushing the boundaries of creativity and functionality. Through sustainable practices and client-centric solutions, we envision crafting environments that leave a lasting impact, transforming communities and redefining the future of architecture and interior design.</p>
                </div>
            </div>

            </div>
        )
    }
}
export default About