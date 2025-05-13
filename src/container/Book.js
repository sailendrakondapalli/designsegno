import React from "react";
import emailjs from "emailjs-com";
class Book extends React.Component{
    constructor(){
        super()
            this.state={
                fname:"",
                email:"",
                phoneno:"",
                message:""
            }
            this.handle=this.handle.bind(this)
            this.sendEmail = this.sendEmail.bind(this);
    }
    handle(event){
        this.setState(
            {
                [event.target.name]:event.target.value
            }
        )
    }

     sendEmail(e) {
    e.preventDefault();

    const templateParams = {
      from_name: this.state.fname,
      from_email: this.state.email,
      phone: this.state.phone,
      message:this.state.message
    };

    emailjs
      .send(
        "service_5chg4jb",      // replace with your EmailJS service ID
        "template_3lo282q",     // replace with your EmailJS template ID
        templateParams,
        "W5dr-2Jl7sp3j6vYT"       // replace with your EmailJS public key
      )
      .then(
        (result) => {
          console.log("Email sent:", result.text);
          alert("Your Order Booked we will connected shortly");
          this.setState({ fname: "", email: "", phone: "",message:"" }); // clear form
        },
        (error) => {
          console.log("Error:", error.text);
          alert("Failed to send email.");
        }
      );
  }

    render(){
        return(
            <div className="booknow">
                <h1>Book Now</h1>
                <form onSubmit={this.sendEmail}>
                    <input type="text" name="fname" value={this.state.fname} placeholder="Enter Your Name" onChange={this.handle} required/>
                   <br></br> <input type="email" name="email" value={this.state.email} placeholder="Enter Your Email Id"  onChange={this.handle} required/>
                   <br></br> <input type="text" name="phone" value={this.state.phone} placeholder="Enter Your PhoneNo"  onChange={this.handle} required/>
                   <br></br> <textarea name="message" value={this.state.message} placeholder="Message" 
                    onChange={this.handle} required></textarea>
                   <br></br> <button type="submit">Send</button>
                </form>
            </div>
        )
    }
}
export default Book