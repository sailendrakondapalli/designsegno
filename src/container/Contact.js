import React from "react";
// import profile from "./profile.jpg"
class Contact extends React.Component{
    render(){
        return(
            <div style={{ width: "100%", height: "400px", overflow: "hidden", borderRadius: "12px" }}>
        <iframe
          title="google-map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30465.136905324667!2d82.5228230362745!3d17.356893357464113!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a39c7eeedabf617%3A0xb10a0409553b2a7b!2sTuni%2C%20Andhra%20Pradesh%20533401!5e0!3m2!1sen!2sin!4v1747135852831!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
        )
    }
}
export default Contact