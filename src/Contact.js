import React, { useState } from "react";
import { FaHome, FaPhone } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { db } from "./firebase";
import { collection, addDoc } from "firebase/firestore";
import "./contact.css";

const Contact = ({ auth }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  //creating database ref
  const dbref = collection(db, "Message");
  
  //sending message to firebase database
  const sendMessage = async () => 
  {
    if (auth === false) 
    {
      alert("please Login")
    } 
    else 
    {
      if ((name || []).length === 0 ||(email || []).length === 0 ||(subject || []).length === 0 ||(message || []).length === 0) 
      {
        alert("please Fill All Blanks")
      }
      else 
      {
        await addDoc(dbref, {Name: name,Email: email,Subject: subject,Message: message,});
        alert("Message Sent successfully !")
      }
    }
  };
  return (
    <>
      <div className="conatct">
        <div className="container">
          <div className="address">
            <div className="address_container">
              <h3>Contact Us</h3>
              <div className="box">
                <div className="title">
                  <div className="icon">
                    <FaHome />
                  </div>
                  <h4>Address</h4>
                </div>
                <div className="detail">
                  <p>123 Main Street, Anytown, CA 12345 – USA</p>
                </div>
              </div>
              <div className="box">
                <div className="title">
                  <div className="icon">
                    <FaPhone />
                  </div>
                  <h4>Phone</h4>
                </div>
                <div className="detail">
                  <p>Mobile: (08) 123 456 789</p>
                </div>
              </div>
              <div className="box">
                <div className="title">
                  <div className="icon">
                    <MdOutlineEmail />
                  </div>
                  <h4>E-mail</h4>
                </div>
                <div className="detail">
                  <p>contact@domain.com</p>
                </div>
              </div>
            </div>
          </div>
          <div className="message">
            <div className="message_container">
              <h3>Tell Us Your Message</h3>
              <div className="input_box">
                <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)}></input>
              </div>
              <div className="input_box">
                <input type="email" placeholder="E-mail" value={email} onChange={(e) => setEmail(e.target.value)}></input>
              </div>
              <div className="input_box">
                <input type="text" placeholder="Subject" value={subject} onChange={(e) => setSubject(e.target.value)}></input>
              </div>
              <div className="input_box">
                <textarea placeholder="Message !" value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
              </div>
              <button onClick={sendMessage}>Send</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact;
