import "./Contact.css";

function Contact() {
    return (
        <>
        <div className="columns form-container">
            <div className="column is-mobile form-border">
                <div className="field">
                    <label className="label">Name</label>
                        <div className="control">
                            <input className="input" type="text" placeholder="Text input" />
                        </div>
                </div>
                <div className="field">
                    <label className="label">Email</label>
                    <div className="control has-icons-left has-icons-right">
                        <input
                            className="input"
                            type="email"
                            placeholder="Email input"
                        />
                        <span className="icon is-small is-left">
                            <i className="fas fa-envelope" />
                        </span>
                    </div>
                </div>
                <div className="field">
                    <label className="label">Message</label>
                        <div className="control">
                            <textarea className="textarea" placeholder="Type your message here" defaultValue={""} />
                        </div>
                </div>
                <div className="field is-grouped">
                    <div className="control">
                        <button className="button is-info">Submit</button>
                    </div>
                    <div className="control">
                        <button className="button is-info is-light">Cancel</button>
                    </div>
                </div>
            </div>
        </div>
    </>

    )
}

export default Contact;