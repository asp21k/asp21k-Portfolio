import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Fade from "react-reveal/Fade";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export default function Contact() {
  const emailRegex = RegExp(
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
  );
  const phoneRegex = RegExp(/^(\+\d{1,3}[- ]?)?\d{10}$/);

  const [userData, setUserData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });


  
  const [submitted,setSubmmited] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (submitted) {
      navigate("/submission");
    }
  }, [submitted]);
  
  const [error, setError] = useState({
    nameError: "",
    emailError: "",
    phoneError: "",
    messageError: "",
  });

  const validate = () => {
    let isValid = true;

    const { name, email, phone, message } = userData;
    let nameError = "";
    let emailError = "";
    let phoneError = "";
    let messageError = "";

    if (name.trim() === "" || !name) {
      nameError = "* Required";
      isValid = false;
    } else if (name.length < 2) {
      nameError = "Name must be at least 2 characters";
      isValid = false;
    } else {
      nameError = "";
    }

    if (email.trim() === "" || !email) {
      emailError = "* Required";
      isValid = false;
    } else if (!emailRegex.test(email)) {
      emailError = "Invalid Email";
      isValid = false;
    } else {
      emailError = "";
    }

    if (phone.trim() === "" || !phone) {
      phoneError = "* Required";
      isValid = false;
    } else if (!phoneRegex.test(phone)) {
      phoneError = "Invalid Mobile Number";
      isValid = false;
    } else {
      phoneError = "";
    }

    if (message.trim() === "" || !message) {
      messageError = "* Required";
      isValid = false;
    } else if (message.length < 10) {
      messageError = "Message must be at least 10 characters";
      isValid = false;
    } else {
      messageError = "";
    }

    setError({
      nameError,
      emailError,
      phoneError,
      messageError,
    });

    return isValid;
  };

  const handleChange = (e) => {
    e.preventDefault();
    setUserData({
      ...userData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="mx-auto my-8 w-auto items-center overflow-hidden rounded-lg bg-slate-900/50 px-16 py-3 shadow-md xl:w-5/6">
      <Fade up cascade>
        <div className="mx-auto w-11/12">
          <div>
            <h1 className="heading-main">Let's Talk</h1>
          </div>
          <h1 className="mt-3 text-center font-secondary text-base font-medium text-gray-400">
            While I am good with smoke signals, there are simpler ways to get in
            touch and answer your queries.
          </h1>
          <div className="mt-6 space-y-4 lg:flex lg:space-x-7 lg:space-y-0">
            <div className="mx-auto flex-grow transform transition duration-500 ease-in-out hover:scale-105">
              <a href="mailto:atharvap2123@gmail.com" rel="noreferrer">
                <svg
                  className="mx-auto h-16 w-16 transform fill-current text-orange-600 transition duration-500 ease-in-out hover:scale-105 hover:text-blue-400 lg:h-10 lg:w-10"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 30 30"
                >
                  <path d="M 26 3 A 1 1 0 0 0 25.716797 3.0429688 A 1 1 0 0 0 25.636719 3.0683594 L 3.6503906 10.060547 L 3.6503906 10.064453 A 1 1 0 0 0 3 11 A 1 1 0 0 0 3.4824219 11.853516 L 10.164062 17.154297 L 23.373047 6.6269531 L 12.845703 19.835938 L 18.142578 26.513672 A 1 1 0 0 0 19 27 A 1 1 0 0 0 19.935547 26.349609 L 19.939453 26.349609 L 26.9375 4.34375 A 1 1 0 0 0 26.957031 4.2832031 A 1 1 0 0 0 27 4 A 1 1 0 0 0 26 3 z"></path>
                </svg>
                <p className="text-center font-primary text-xl font-bold text-gray-300">
                  Mail Me:
                </p>
                <p className="text-center font-secondary text-lg font-medium text-gray-400">
                  atharvap2123@gmail.com
                </p>
              </a>
            </div>

            <div className="mx-auto flex-grow transform transition duration-500 ease-in-out hover:scale-105">
              <a href="tel:+91 8767379887" rel="noreferrer">
                <svg
                  className="mx-auto h-16 w-16 transform fill-current text-orange-600 transition duration-500 ease-in-out hover:scale-105 hover:text-blue-400 lg:h-10 lg:w-10"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 30 30"
                >
                  <path d="M21.225,17.889c-0.406-0.238-0.905-0.233-1.309,0.007l-2.046,1.219c-0.458,0.273-1.03,0.241-1.45-0.087 c-0.726-0.567-1.895-1.521-2.912-2.538c-1.017-1.017-1.971-2.186-2.538-2.912c-0.328-0.42-0.36-0.992-0.087-1.45l1.219-2.046 c0.241-0.404,0.243-0.907,0.005-1.313L9.105,3.641c-0.291-0.496-0.869-0.74-1.428-0.603C7.134,3.17,6.429,3.492,5.69,4.232 c-2.314,2.314-3.543,6.217,5.159,14.919s12.604,7.474,14.919,5.159c0.741-0.741,1.062-1.447,1.195-1.991 c0.135-0.558-0.105-1.132-0.6-1.422C25.127,20.174,22.461,18.613,21.225,17.889z"></path>
                </svg>
                <p className="text-center font-primary text-xl font-bold text-gray-300">
                  Phone Me:
                </p>
                <p className="text-center font-secondary text-lg font-medium text-gray-400">
                  +91 8767379887
                </p>
              </a>
            </div>

            <div className="mx-auto flex-grow transform transition duration-500 ease-in-out hover:scale-105">
              <a
                href="https://maps.app.goo.gl/4pD9AhJhFJnfJ5cZ9"
                target="_blank"
                rel="noreferrer"
              >
                <svg
                  className="mx-auto h-16 w-16 transform fill-current text-orange-600 transition duration-500 ease-in-out hover:scale-105 hover:text-orange-400 lg:h-10 lg:w-10"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M 12 1 C 8.686 1 6 3.686 6 7 C 6 11.286 12 18 12 18 C 12 18 18 11.286 18 7 C 18 3.686 15.314 1 12 1 z M 12 4.8574219 C 13.184 4.8574219 14.142578 5.816 14.142578 7 C 14.142578 8.183 13.183 9.1425781 12 9.1425781 C 10.817 9.1425781 9.8574219 8.184 9.8574219 7 C 9.8574219 5.816 10.816 4.8574219 12 4.8574219 z"></path>
                </svg>
                <p className="text-center font-primary text-xl font-bold text-gray-300">
                  Meet Me:
                </p>
                <p className="text-center font-secondary text-lg font-medium text-gray-400">
                  Pune, Maharashtra
                </p>
              </a>
            </div>
          </div>
          <iframe
            name="hiddenConfirm"
            id="hiddenConfirm"
            style={{ display: "none" }}
            
          />
          <div className="mt-6">
            <form
              autoComplete="off"
              action="https://docs.google.com/forms/d/e/1FAIpQLScJ-Ke3M7Fd-i6SkKDI8JJD0jWMKie2HZ0773GXgDzLvgY5zw/formResponse"
              target="hiddenConfirm"
              onSubmit={() => setTimeout(() => setSubmmited(true), 1000)}
              method="post"
            >
              <div className="lg:flex lg:space-x-8">
                <div className="flex w-full flex-col lg:w-1/2">
                  <label className="mb-2 font-secondary text-lg font-medium text-gray-400">
                    Name
                  </label>
                  <input
                    className={
                      error.nameError === ""
                        ? "block appearance-none rounded-md bg-slate-700 px-4 py-4 font-primary leading-tight text-white focus:bg-slate-600 focus:outline-none"
                        : "block appearance-none rounded-md border-2 border-red-500 bg-slate-700 px-4 py-4 font-primary leading-tight text-white focus:bg-slate-600 focus:outline-none"
                    }
                    id="name"
                    name="entry.524903826"
                    type="text"
                    placeholder="Mary Jane"
                    onChange={handleChange}
                  />
                  {error.nameError === "" ? null : (
                    <p className="mt-2 text-xs italic text-red-500">
                      {error.nameError}
                    </p>
                  )}
                  <label className="mb-2 mt-5 font-secondary text-lg font-medium text-slate-400">
                    Email
                  </label>
                  <input
                    className={
                      error.emailError === ""
                        ? "block appearance-none rounded-md bg-slate-700 px-4 py-4 font-primary leading-tight text-white focus:bg-slate-600 focus:outline-none"
                        : "block appearance-none rounded-md border-2 border-red-500 bg-slate-700 px-4 py-4 font-primary leading-tight text-white focus:bg-slate-600 focus:outline-none"
                    }
                    id="email"
                    name="entry.51725981"
                    type="text"
                    placeholder="maryjane@gmail.com"
                    onChange={handleChange}
                  />
                  {error.emailError === "" ? null : (
                    <p className="mt-2 text-xs italic text-red-500">
                      {error.emailError}
                    </p>
                  )}
                  <label className="mb-2 mt-5 font-secondary text-lg font-medium text-gray-400">
                    Mobile Number
                  </label>
                  <input
                    className={
                      error.phoneError === ""
                        ? "block appearance-none rounded-md bg-slate-700 px-4 py-4 font-primary leading-tight text-white focus:bg-slate-600 focus:outline-none"
                        : "block appearance-none rounded-md border-2 border-red-500 bg-slate-700 px-4 py-4 font-primary leading-tight text-white focus:bg-slate-600 focus:outline-none"
                    }
                    id="phone"
                    name="entry.1666392680"
                    type="phone"
                    placeholder="9876543210"
                    onChange={handleChange}
                  />
                  {error.phoneError === "" ? null : (
                    <p className="mt-2 text-xs italic text-red-500">
                      {error.phoneError}
                    </p>
                  )}
                </div>
                <div className="mt-5 flex w-full flex-col lg:mt-0 lg:w-1/2">
                  <label className="mb-2 font-secondary text-lg font-medium text-gray-400">
                    Message
                  </label>
                  <textarea
                    rows="8"
                    className={
                      error.messageError === ""
                        ? "block h-full resize-none appearance-none rounded-md bg-slate-700 px-4 py-4 font-primary leading-tight text-white focus:bg-slate-600 focus:outline-none"
                        : "block h-full resize-none appearance-none rounded-md border-2 border-red-500 bg-slate-700 px-4 py-4 font-primary leading-tight text-white focus:bg-slate-600 focus:outline-none"
                    }
                    type="text"
                    id="message"
                    name="entry.632471115"
                    placeholder="Hey there, I am interested in your services. Can we schedule a call?"
                    onChange={handleChange}
                  />
                  {error.messageError === "" ? null : (
                    <p className="mt-2 text-xs italic text-red-500">
                      {error.messageError}
                    </p>
                  )}
                </div>
              </div>
              <button
                className="my-2 mt-8 w-full rounded bg-orange-600 px-4 py-3 text-center font-primary text-lg font-medium text-white transition duration-500 ease-in-out hover:bg-orange-700"
                type="submit"
              >
                Send
               
              </button>
            </form>
          </div>
        </div>
      </Fade>
    </div>
  );
}
