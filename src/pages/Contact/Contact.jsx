import "./Contact.css";
import { useEffect, useState } from "react";
import { initializeEmailJS, sendMail } from "../../scripts/sendMail";

const ContactPage = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [isSubmit, setIsSubmit] = useState(false);

    useEffect(() => {
        initializeEmailJS();
    }, []);

    function handleSubmit(e) {
        e.preventDefault();

        sendMail({ name, email, message }).then(() => {
            setIsSubmit(true);
            setName("");
            setEmail("");
            setMessage("");
        });
    }

    return (
        <div className="form-container">
            { !isSubmit ? (
                <form className="form-body" onSubmit={handleSubmit}>
                    <div className="field">
                        <label className="label" htmlFor="name">Name</label>
                        <div className="control has-icons-left">
                            <input
                                className="input"
                                type="text"
                                placeholder="Name"
                                required
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                            <span className="icon is-small is-left">
                                <i className="fas fa-user" />
                            </span>
                        </div>
                    </div>
                    <div className="field">
                        <label className="label" htmlFor="email">Email</label>
                        <div className="control has-icons-left">
                            <input
                                className="input"
                                type="email"
                                placeholder="Email"
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <span className="icon is-small is-left">
                                <i className="fas fa-envelope" />
                            </span>
                        </div>
                    </div>
                    <div className="field">
                        <label className="label" htmlFor="message">Message</label>
                        <div className="control">
                            <textarea
                                className="textarea"
                                placeholder="Type your message here"
                                required
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                            ></textarea>
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
            ) : (
                <div className="ty-msg">Thank you for contacting me! I will get back to you soon.</div>
            )}
        </div>
    );
};

export default ContactPage;