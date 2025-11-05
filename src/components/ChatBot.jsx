import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

const API_KEY = "AIzaSyBZ3b91OggrP5rvZwA7HEeIS5HYbWt_p9c";

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [inputMessage, setInputMessage] = useState("");
  const [chatHistory, setChatHistory] = useState([
    { sender: "bot", text: "Hello! How can I help you today?" },
  ]);
  const [loading, setLoading] = useState(false);

  const createChat = async (e) => {
    e.preventDefault();
    if (!inputMessage.trim()) return;

    // Add user message to chat
    setChatHistory([...chatHistory, { sender: "user", text: inputMessage }]);
    setLoading(true);

    try {
      const payload = {
        contents: {
          parts: {
            text: inputMessage,
          },
        },
      };

      const options = {
        headers: {
          "X-goog-api-key": API_KEY,
        },
      };

      const { data } = await axios.post(
        "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent",
        payload,
        options
      );

      const botReply = data?.candidates?.[0]?.content?.parts?.[0]?.text;

      if (botReply) {
        setChatHistory((prev) => [...prev, { sender: "bot", text: botReply }]);
      
      } else {
        toast.error("No response from API.");
      }
    } catch (error) {
      toast.error(error.message);
    } finally {
      setInputMessage("");
      setLoading(false);
    }
  };

  return (
    <div>
      {/* Chatbot Button */}
      {!isOpen && (
        <div
          onClick={() => setIsOpen(true)}
          className="fixed bottom-5 right-5 z-50 cursor-pointer"
        >
          <i className="ri-robot-3-fill text-4xl bg-blue-700 p-2 rounded-full text-white shadow-lg"></i>
        </div>
      )}

      {/* Chat Modal */}
      {isOpen && (
        <div className="fixed bottom-0 mb-5 right-5 w-80 h-96 bg-white rounded-t-lg shadow-xl flex flex-col z-50">
          {/* Header */}
          <div className="bg-blue-700 text-white p-3 rounded-t-lg flex justify-between items-center">
            <h2 className="font-bold text-lg">ChatBot</h2>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white text-xl"
            >
              &times;
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 p-3 overflow-y-auto space-y-2">
            {chatHistory.map((msg, index) => (
              <div
                key={index}
                className={`${
                  msg.sender === "user" ? "text-right" : "text-left"
                }`}
              >
                <p
                  className={`inline-block px-3 py-1 rounded-lg ${
                    msg.sender === "user"
                      ? "bg-blue-700 text-white"
                      : "bg-gray-200 text-gray-800"
                  }`}
                >
                  {msg.text}
                </p>
              </div>
            ))}
            {loading && <p className="text-gray-500">Bot is typing...</p>}
          </div>

          {/* Input */}
          <form onSubmit={createChat}>
            <div className="p-3 border-t flex">
              <input
                type="text"
                placeholder="Type a message..."
                className="flex-1 p-2 border rounded-l-md outline-none"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
              />
              <button
                type="submit"
                className="bg-blue-700 text-white px-4 rounded-r-md"
                disabled={loading}
              >
                Send
              </button>
            </div>
          </form>
        </div>
      )}

      <ToastContainer position="bottom-right" autoClose={3000} />
    </div>
  );
};

export default ChatBot;
