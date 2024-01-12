import React, { useEffect, useState } from "react";

import { Spinner } from "../components/Shared/Spinner";
import axios from "axios";
import { toast } from "react-toastify";

export default function Messages() {
  const [loading, setLoading] = useState(true);
  const [messages, setMessages] = useState([]);

  const getMessages = async () => {
    let config = {
      method: "GET",
      url: "https://rohin-portfolio-api.herokuapp.com/messages/",
    };

    await axios(config)
      .then((res) => {
        setMessages(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        toast.error("Error fetching messages");
        setLoading(false);
      });
  };

  const deleteMessage = async (id) => {
    let config = {
      method: "DELETE",
      url: `https://rohin-portfolio-api.herokuapp.com/messages/${id}`,
    };

    await axios(config)
      .then((res) => {
        toast.success("Message deleted");
        getMessages();
      })
      .catch((err) => {
        console.log(err);
        toast.error("Error deleting message");
      });
  };

  const handleDelete = (id) => {
    deleteMessage(id);
    setMessages(messages.filter((message) => message._id !== id));
  };

  useEffect(() => {
    getMessages();
    // eslint-disable-next-line
  }, []);

  return (
    <div>
      {loading && <Spinner />}

      {!messages?.length && !loading && (
        <div className="text-center">
          <h1 className="mt-10 transform text-center font-primary text-3xl font-black capitalize text-gray-300 transition duration-500 ease-in-out hover:scale-105 hover:text-yellow-400 md:text-5xl">
            Messages
          </h1>
          <i className="fas fa-folder-open mt-8 text-9xl text-blue-500"></i>
          <h1 className="mt-2 text-center font-secondary text-xl text-white">
            No Messages
          </h1>
        </div>
      )}

      {messages?.length && (
        <div>
          <h1 className="mt-10 transform text-center font-primary text-3xl font-black capitalize text-gray-300 transition duration-500 ease-in-out hover:scale-105 hover:text-yellow-400 md:text-5xl">
            Messages
          </h1>
          {messages?.map((message, index) => {
            return (
              <div className="flex justify-center" key={index}>
                <div className="mt-8 w-full rounded-md bg-gray-800 p-8 md:w-3/4">
                  <div className="flex space-x-8">
                    <div className="flex-grow">
                      <p className="font-secondary text-xl font-bold text-gray-300">
                        {message.name}{" "}
                        <span className="font-secondary text-xl font-medium text-gray-500">
                          ({message.phone})
                        </span>
                      </p>
                      <p className="font-secondary text-lg font-medium text-gray-400">
                        {message.email}
                      </p>
                      <p className="mt-2 font-primary text-lg font-medium text-gray-300">
                        {message.message}
                      </p>
                    </div>
                    <i
                      className="fas fa-trash my-auto hidden h-full text-2xl text-red-500 sm:block"
                      onClick={() => {
                        handleDelete(message._id);
                      }}
                    ></i>
                  </div>
                  <p
                    className="mt-6 block cursor-pointer text-center font-secondary text-lg font-medium text-red-500 sm:hidden"
                    onClick={() => {
                      handleDelete(message._id);
                    }}
                  >
                    Delete
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
