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
          <h1 className="text-center mt-10 font-primary font-black text-3xl md:text-5xl capitalize text-gray-300 transition duration-500 ease-in-out transform hover:scale-105 hover:text-yellow-400">
            Messages
          </h1>
          <i className="fas fa-folder-open text-blue-500 text-9xl mt-8"></i>
          <h1 className="text-white font-secondary text-center text-xl mt-2">
            No Messages
          </h1>
        </div>
      )}

      {messages?.length && (
        <div>
          <h1 className="text-center mt-10 font-primary font-black text-3xl md:text-5xl capitalize text-gray-300 transition duration-500 ease-in-out transform hover:scale-105 hover:text-yellow-400">
            Messages
          </h1>
          {messages?.map((message, index) => {
            return (
              <div className="flex justify-center" key={index}>
                <div className="w-full md:w-3/4 p-8 bg-gray-800 rounded-md mt-8">
                  <div className="flex space-x-8">
                    <div className="flex-grow">
                      <p className="text-xl text-gray-300 font-secondary font-bold">
                        {message.name}{" "}
                        <span className="text-xl text-gray-500 font-secondary font-medium">
                          ({message.phone})
                        </span>
                      </p>
                      <p className="text-lg text-gray-400 font-secondary font-medium">
                        {message.email}
                      </p>
                      <p className="text-gray-300 font-primary font-medium mt-2 text-lg">
                        {message.message}
                      </p>
                    </div>
                    <i
                      className="hidden sm:block h-full my-auto fas fa-trash text-red-500 text-2xl"
                      onClick={() => {
                        handleDelete(message._id);
                      }}
                    ></i>
                  </div>
                  <p
                    className="block sm:hidden text-red-500 text-center mt-6 text-lg font-secondary font-medium cursor-pointer"
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
