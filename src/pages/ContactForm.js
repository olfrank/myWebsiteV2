import React, { useState} from "react";
import '../pages/contact.css';
import Video from "../video/StarsBg.mp4";
import Footer from '../components/Footer';
import '../App.css';

import { Header, 
         HeroBg,
         VideoBg, 
         NameField, 
         EmailField, 
         MessageField, 
         Button, 
         ArrowDown, 
         MailIcon, 
         BackArrow,
         SubjectField,
         ResetBtn,
         ResetArrow,
         BackHome
        } from "./ContactElements";


const ContactForm = () =>{
    const [status, setStatus] = useState("Submit");
    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus("Sending...");
        const { name, email, subject, message } = e.target.elements;
        let details = {
            name: name.value,
            email: email.value,
            subject: subject.value,
            message: message.value,
        };
        let response = await fetch("http://localhost:5000/contact", {
            method: "POST",
            headers: {
                "Content-Type": "application/json;charset=utf-8",
            },
            body: JSON.stringify(details),
        });
        setStatus("Submit");
        let result = await response.json();
        alert(result.status)
        
        
    };

    
    return (
      <div className="page">
        <BackHome to="/">
          <BackArrow  />
        </BackHome>
        <Header>contact me</Header>
        <ArrowDown/>
        
            <HeroBg>
                <VideoBg autoPlay loop muted src={Video} type= "video/mp4" />
            </HeroBg>
          <div className="container">
            
            <form className="form" onSubmit={handleSubmit}>
            <MailIcon/>
              <NameField>
                <label htmlFor="name">name: </label>
                <input type="text" id="name"  required className="input-fields"></input>
              </NameField>
              <EmailField>
                <label htmlFor="email">email: </label>
                <input type="email" id="email" required className="input-fields"/>
              </EmailField>
              <SubjectField>
                <label htmlFor="subject">subject: </label>
                <input type="subject" id="subject" required className="input-fields"/>
              </SubjectField>
              <MessageField>
                <label htmlFor="message">message: </label>
                <textarea id="message" required className="text-fields"/>
              </MessageField>
              <Button  type="submit">{status}</Button>
              <ResetBtn  type="reset" ><ResetArrow/></ResetBtn>
            </form>
          </div>
          <Footer />
      </div>
      
    );
};

export default ContactForm;
