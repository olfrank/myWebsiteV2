import React from "react";
import '../pages/contact.css';
import Video from "../video/StarsBg.mp4";
import Footer from '../components/Footer';
import '../App.css';
import emailjs from 'emailjs-com'
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
  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('service_asvuevp', 'template_nuo5s7p', e.target, 'user_APYoiu6sPj8GgJP8L0Hgw')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      alert("Your Message has been sent!");
      e.target.reset();
}







  /******** js to connect server.js (Node.js) to ContactForm page (Github Pages does not support server side technology so i opted for EmailJS instead)******** */
    // const [status, setStatus] = useState("Submit");
    // const handleSubmit = async (e) => {
    //     e.preventDefault();
    //     setStatus("Sending...");
    //     const { name, email, subject, message } = e.target.elements;
    //     let details = {
    //         name: name.value,
    //         email: email.value,
    //         subject: subject.value,
    //         message: message.value,
    //     };
    //     let response = await fetch("http://localhost:5000/contact", {
    //         method: "POST",
    //         headers: {
    //             "Content-Type": "application/json;charset=utf-8",
    //         },
    //         body: JSON.stringify(details),
    //     });
    //     setStatus("Submit");
    //     let result = await response.json();
    //     alert(result.status)
    // };



    
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
            
            <form className="form" onSubmit={sendEmail}>
            <MailIcon/>
              <NameField>
                <label htmlFor="name">name: </label>
                <input type="text" id="name"  required className="input-fields" name="name"></input>
              </NameField>
              <EmailField>
                <label htmlFor="email">email: </label>
                <input type="email" id="email" required className="input-fields" name="email"/>
              </EmailField>
              <SubjectField>
                <label htmlFor="subject">subject: </label>
                <input type="text" id="subject" required className="input-fields" name="subject"/>
              </SubjectField>
              <MessageField>
                <label htmlFor="message">message: </label>
                <textarea id="message" required className="text-fields" name="message"/>
              </MessageField>
              <Button  type="submit" value="send message">submit</Button>
              <ResetBtn  type="reset" ><ResetArrow/></ResetBtn>
            </form>
          </div>
          <Footer />
      </div>
      
    );
};

export default ContactForm;
