import emailjs from '@emailjs/browser';

const initializeEmailJS = () => {
    emailjs.init("cpjC4NJP5ymKa_Zz5");
}

const sendMail = (value) => {
    
    const serviceID = "portfolio_contact_form";
    const templateID = "template_54b1z2m";

    const params = {
        name: value.name,
        email: value.email,
        message: value.message
    };

    return emailjs.send(serviceID, templateID, params)
        .then((res) => {
            console.log("Success:", res);
        })
        .catch((err) => {
            console.error("Failed to send email:", err);
            alert("There was an error sending your message. Please try again later.");
        });
}

export { initializeEmailJS, sendMail }