import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const messages = [
  { sender: "client", text: "Hello, I am looking for a digital marketing agency." },
  { sender: "support", text: "Hi! Welcome to our support. We provide top-notch digital marketing services. How can we assist you?" },
  { sender: "client", text: "Great! Can you tell me more about your services?" },
  { sender: "support", text: "Sure! We offer SEO, social media marketing, PPC ads, and more to help your business grow online." }
];

export default function ChatBubbleAnimation() {
  const [chat, setChat] = useState([]);
  const [typing, setTyping] = useState(false);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < messages.length) {
      setTyping(true);
      const timeout = setTimeout(() => {
        setChat((prev) => [...prev, messages[index]]);
        setTyping(false);
        setIndex((prev) => prev + 1);
      }, 1000);
      return () => clearTimeout(timeout);
    }
  }, [index]);

  return (
    <div className="flex flex-col gap-2 p-4 max-w-md mx-auto  ">
      {chat.map((msg, idx) => (
        <motion.div
          key={idx}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className={`p-3 rounded-lg max-w-xs ${
            msg.sender === "client" ? "bg-blue-500 text-white self-start" : "bg-gray-300 text-black self-end"
          }`}
        >
          {msg.text}
        </motion.div>
      ))}
      {typing && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ repeat: Infinity, duration: 0.8 }}
          className="p-3 bg-gray-300 text-black self-end rounded-lg max-w-xs"
        >
          Typing...
        </motion.div>
      )}
    </div>
  );
}
