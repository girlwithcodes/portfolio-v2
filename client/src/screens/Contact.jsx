import { useState } from 'react';
import emailjs from 'emailjs-com';
function Contact() {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [resultVis, setResultVis] = useState(false);
  const [result, setResult] = useState(0);

  const handleChange = (e) => {
    setResultVis(false);
    setResult(0);
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  }

  const handleSubmit = async(e) => {
    e.preventDefault();
    const res= await emailjs.sendForm('gmail', 'template_d38wos3', e.target,'user_fNbL7kytUyuA4WrHiz6F8');
    console.log(res.status);
    setResult(res.status);
    e.target.reset();
  }

  const toggleVisibility = () => {
    setResultVis((prev)=>!prev);
  }

  const setMessageResultClass = () => {
    return resultVis ? "message-status" : "message-status invisible";
  }

  const setMessage = () => {
    if(!result) {
      return "Sending...";
    } else if (result >= 200 && result<300 ) {
      return "Message Sent";
  } else {
    return "Unable to Send";
  }
}

  return (
    <div id="contact-section" className="section contact">
      <div className="heading-div heading-div__contact">
        <h2 className="heading-secondary heading-secondary--contact">Contact Me</h2>
      </div>

      <div className="section-content section-content--contact">

        <div className="color-wedge color-wedge--contact"></div>

        <div className="contact-form-div">
          <form className="contact-form form-text" onSubmit={handleSubmit}>
            <div className="label-input-div">
              <label htmlFor="name-input" className="contact-form-label">Name:</label>
              <input 
                type="text"
                name="name" 
                id="name-input"
                className="message-input message-input--text"
                onChange={handleChange}
                />
            </div>

            <div className="label-input-div">
              <label htmlFor="email-input" className="contact-form-label">Email:</label>
              <input 
                type="text" 
                name="email"
                id="email-input"
                className="message-input message-input--text"
                onChange={handleChange}
                />
            </div>

            <div className="label-input-div">
              <label htmlFor="message-input" className="contact-form-label">Message:</label>
              <textarea 
                id="message-input"
                className="message-input message-input--text message-input--text-area"
                name="message"
                onChange={handleChange}
                />
            </div>

            <div className="message-status-div">
              <p className={setMessageResultClass()}>{setMessage()}</p>
            </div>
          
            <button className="btn btn--main btn--send" onClick={toggleVisibility}>Send</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact;