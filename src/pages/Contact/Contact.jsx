import "./Contact.css";
import { initializeEmailJS, sendMail } from "../../components/Scripts/script";
import { useEffect } from "react";

function Contact() {

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
