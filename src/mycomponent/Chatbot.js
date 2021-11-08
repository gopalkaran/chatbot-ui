import React from "react";
import "../css/chatbot.css";

const Chatbot = () => {
  return (
    <div className="chat-window">
      <section className="section-one">
        <h3>IRIS</h3>
        <h4>Hello</h4>
        <p>I am Iris, a Virtual Assistant</p>
        <p>How may I help you?</p>
      </section>

      <section className="section-two">
        <div className="robot-container">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            enable-background="new 0 0 24 24"
            height="24px"
            viewBox="0 0 24 24"
            width="24px"
            fill="#FFFFFF"
          >
            <g>
              <rect fill="none" height="24" width="24" y="0" />
            </g>
            <g>
              <g>
                <path d="M20,9V7c0-1.1-0.9-2-2-2h-3c0-1.66-1.34-3-3-3S9,3.34,9,5H6C4.9,5,4,5.9,4,7v2c-1.66,0-3,1.34-3,3s1.34,3,3,3v4 c0,1.1,0.9,2,2,2h12c1.1,0,2-0.9,2-2v-4c1.66,0,3-1.34,3-3S21.66,9,20,9z M18,19L6,19V7h12V19z M9,13c-0.83,0-1.5-0.67-1.5-1.5 S8.17,10,9,10s1.5,0.67,1.5,1.5S9.83,13,9,13z M16.5,11.5c0,0.83-0.67,1.5-1.5,1.5s-1.5-0.67-1.5-1.5S14.17,10,15,10 S16.5,10.67,16.5,11.5z M8,15h8v2H8V15z" />
              </g>
            </g>
          </svg>
        </div>
        <p>Frequently Asked Questions ?</p>
        <ul>
          <li>Can I redeem my FB before the original term?</li>
          <li>How do I pay my Credit card bill?</li>
          <li>How can I get my Account Statement?</li>
          <li>What is the tenure of Fixed Depotsit?</li>
        </ul>
        <button>Start a New Conversation</button>
      </section>
    </div>
  );
};

export default Chatbot;
