import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

import CommonSection from "../components/ui/Common-section/CommonSection";
import { Container, Row, Col } from "reactstrap";

const Contact = () => {
  const form = useRef();
  const [inputUsername, setInputUsername] = useState("");
  const [inputUseremail, setUseremail] = useState("");
  const [inputSubject, setInputSubject] = useState("");
  const [inputMessage, setInputMesage] = useState("");

  // const handleUserInput = (e) => {
  //   setInputUsername(e.target.value);
  //   setUseremail(e.target.value);
  //   setInputSubject(e.target.value);
  //   setInputMesage(e.target.value);
  // };
  const sendEmail = (e) => {
    e.preventDefault();
    setInputUsername(e.target.value);
    setUseremail(e.target.value);
    setInputSubject(e.target.value);
    setInputMesage(e.target.value);

    emailjs
      .sendForm(
        "gallery_de_nft",
        "Contact_template_99ypy7v",
        form.current,
        "8TBp7G5GfyBEqa-Wg"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <>
      <CommonSection title="Contact" />
      <section>
        <Container>
          <Row>
            <Col lg="6" md="6" className="m-auto text-center">
              <h2>Drop a Message</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Temporibus ipsum aperiam cumque fugit suscipit animi natus
                nostrum voluptatem iste quam!
              </p>
              <div className="contact mt-4">
                <form ref={form} onSubmit={sendEmail}>
                  <div className="form__input">
                    <input
                      type="text"
                      placeholder="Enter your name"
                      name="user_name"
                      onChange={(event) => setInputUsername(event.target.value)}
                      value={inputUsername}
                    />
                  </div>
                  <div className="form__input">
                    <input
                      type="email"
                      placeholder="Enter your email"
                      name="user_email"
                      onChange={(event) => setUseremail(event.target.value)}
                      value={inputUseremail}
                    />
                  </div>
                  <div className="form__input">
                    <input
                      type="text"
                      placeholder="Enter subject"
                      name="subject"
                      onChange={(event) => setInputSubject(event.target.value)}
                      value={inputSubject}
                    />
                  </div>
                  <div className="form__input">
                    <textarea
                      rows="7"
                      placeholder="Write message"
                      name="message"
                      onChange={(event) => setInputMesage(event.target.value)}
                      value={inputMessage}
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    value=""
                    onClick={sendEmail}
                    className="send__btn"
                    style={{
                      border: "none",
                      padding: "7px 25px",
                      borderRadius: "5px",
                      marginTop: "20px",
                    }}
                  >
                    Send a Message
                  </button>
                </form>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Contact;
