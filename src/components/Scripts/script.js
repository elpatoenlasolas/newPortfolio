import emailjs from 'emailjs-com';

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

export { initializeEmailJS, sendMail };