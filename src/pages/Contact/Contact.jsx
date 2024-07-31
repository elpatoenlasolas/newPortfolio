import "./Contact.css";
import { useEffect } from "react";
import emailjs from '@emailjs/browser';

function Contact() {

    function initializeEmailJS() {
        emailjs.init("cpjC4NJP5ymKa_Zz5"); 
    }
    
    function sendMail() {
        var params = {
            name: document.getElementById("name").value,
            email: document.getElementById("email").value,
            message: document.getElementById("message").value
        };
    
    const serviceID = "portfolio_contact_form";
    const templateID = "template_54b1z2m";
    
    emailjs.send(serviceID, templateID, params)
        .then((res) => {
            document.getElementById("name").value = "";
            document.getElementById("email").value = "";
            document.getElementById("message").value = "";
            console.log("Success:", res);
            alert("Thank you for contacting me! I will get back to you soon.");
        })
        .catch((err) => {
            console.error("Failed to send email:", err);
            alert("There was an error sending your message. Please try again later.");
        });
    }

    useEffect(() => {
        initializeEmailJS();
    }, []);

    function handleSubmit(e) {
        e.preventDefault();

        sendMail();
    }

    return (
        <>
            <div className="form-container">
                <form className="form-body" onSubmit={handleSubmit}>
                    <div className="field">
                        <label className="label" htmlFor="name">Name</label>
                        <div className="control has-icons-left">
                            <input className="input" type="text" id="name" placeholder="Name" required />
                            <span className="icon is-small is-left">
                                <i className="fas fa-user" />
                            </span>
                        </div>
                    </div>
                    <div className="field">
                        <label className="label" htmlFor="email">Email</label>
                        <div className="control has-icons-left">
                            <input className="input" type="email" id="email" placeholder="Email" required />
                            <span className="icon is-small is-left">
                                <i className="fas fa-envelope" />
                            </span>
                        </div>
                    </div>
                    <div className="field">
                        <label className="label" htmlFor="message">Message</label>
                        <div className="control">
                            <textarea className="textarea" id="message" placeholder="Type your message here" required></textarea>
                        </div>
                    </div>
                    <div className="field is-grouped">
                        <div className="control">
                            <button className="button is-info" type="submit">Submit</button>
                        </div>
                        <div className="control">
                            <button className="button is-info is-light" type="button">Cancel</button>
                        </div>
                    </div>
                </form>
            </div>
        </>
    );
}

export default Contact;
