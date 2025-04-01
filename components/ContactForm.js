import { useState, useRef } from 'react';

//simple contact form with name, email and message field
const ContactForm = () => {
    /*form variables*/
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const msgRef = useRef();

    /*error variables*/
    const [nameError, setNameError] = useState('');
    const [emailError, setEmailError] = useState('');
    const [msgError, setMsgError] = useState('');

    /*name & email change*/
    const handleNameChange = (e) => {
        setName(e.target.value);
    }

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    }

    /*handle the submit*/
    const submit = (e) => {
        e.preventDefault();

        setNameError('');
        setEmailError('');
        setMsgError('');

        let isValid = true;

        if (!name.trim()) {
            setNameError('Please enter a name!');
            isValid = false;
        }

        if (!email.trim()) {
            setEmailError('Please enter an email!');
            isValid = false;
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email)) {
            setEmailError('Please enter a valid email!');
            isValid = false;
        }

        const msg = msgRef.current.value;
        if (msg.length < 2) {
            setMsgError('Your message is too short.');
            isValid = false;
        }

        if (isValid) {
            alert('Successful submission!');

            setName('');
            setEmail('');
            msgRef.current.value = '';
        }
        if (isValid) {
            setSuccessMessage('Your message was sent!');

            setName('');
            setEmail('');
            msgRef.current.value = '';
        }
    }
    return (
        <div style={{
            backgroundColor: "#BABABA",
            maxWidth: "500px",
            margin: "30px auto",
            padding: "20px",
            borderRadius: "8px"
        }}>            <h2 style={{ margin: "8px", color: "#111111", textAlign: "center" }}>Contact Us</h2>
            <form onSubmit={submit}>
                <div>
                    <label style={{ margin: "5px", color: "#111111" }}>Name:</label><br></br>
                    <input type="text" id="name" value={name} onChange={handleNameChange} style={{ margin: "5px", backgroundColor: "white", color: "#111111" }} />
                    {nameError && <p style={{ color: "#ac4128", margin: "5px" }}>{nameError}</p>}
                </div>

                <div>
                    <label style={{ margin: "5px", color: "#111111" }}>Email:</label><br></br>
                    <input type="email" id="email" value={email} onChange={handleEmailChange} style={{ margin: "5px", backgroundColor: "white", color: "black" }} />
                    {emailError && <p style={{ color: "#ac4128", margin: "5px" }}>{emailError}</p>}
                </div>

                <div>
                    <label style={{ margin: "5px", color: "#111111" }}>Message:</label><br></br>
                    <textarea id="msg" ref={msgRef}
                        style={{
                            margin: "5px",
                            backgroundColor: "white",
                            color: "black",
                            width: "100%",
                            height: "100px"
                        }}
                    />                    {msgError && <p style={{ color: "#ac4128", margin: "5px" }}>{msgError}</p>}
                </div>


                <button id="formBtn" style={{
                    backgroundColor: "#111111",
                    color: "white",
                    padding: "10px 20px",
                    margin: "10px 5px",
                    border: "none",
                    borderRadius: "4px",
                    cursor: "pointer"
                }}
                >Submit The Form</button>
            </form>
        </div>
    );
};

export default ContactForm;