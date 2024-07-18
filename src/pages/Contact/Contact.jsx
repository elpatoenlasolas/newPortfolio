import { useState } from 'react';
import "./Contact.css";

function Contact() {

    const [submit, setSubmit] = useState(null);

    function handleSubmit(e) {
        submit.e.target(() => {
           return setSubmit(console.log('Ive been submitted'))
        })
    }

    return (
        <>
        <div className="container">
            <div className="form-body">
                <div className="form-border">
                    <div className="field">
                        <label className="label">Name</label>
                            <div className="control has-icons-left">
                                <input className="input" type="text" placeholder="Name" required="true" />
                                <span className="icon is-small is-left">
                                    <i className="fas fa-user" />
                                </span>
                            </div>
                    </div>
                    <div className="field">
                        <label className="label">Email</label>
                            <div className="control has-icons-left">
                                <input className="input" type="email" placeholder="Email" required="true" />
                                <span className="icon is-small is-left">
                                    <i className="fas fa-envelope" />
                                </span>
                            </div>
                    </div>
                    <div className="field">
                        <label className="label">Message</label>
                            <div className="control">
                                <textarea className="textarea" placeholder="Type your message here" defaultValue={""} required="true" />
                            </div>
                    </div>
                    <div className="field is-grouped">
                        <div className="control">
                            <button className="button is-info" onSubmit={(handleSubmit)}>Submit</button>
                        </div>
                        <div className="control">
                            <button className="button is-info is-light">Cancel</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>

    )
}

export default Contact;