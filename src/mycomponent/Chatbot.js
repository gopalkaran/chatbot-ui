import React from "react";
import "../css/chatbot.css";

const Chatbot = ({ toggleWindow }) => {
  return (
    <div className="chat-window">
      <section className="section-one">
        <div className="container">
          <h2>
            IRIS
            <span onClick={toggleWindow}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 0 24 24"
                width="24px"
                fill="#000000"
              >
                <path d="M0 0h24v24H0V0z" fill="none" />
                <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z" />
              </svg>
            </span>
          </h2>
          <h3>
            Hello
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                enable-background="new 0 0 24 24"
                height="24px"
                viewBox="0 0 24 24"
                width="24px"
                fill="#000000"
              >
                <rect fill="none" height="24" width="24" />
                <path d="M7.03,4.95L3.49,8.49c-3.32,3.32-3.32,8.7,0,12.02s8.7,3.32,12.02,0l6.01-6.01c0.97-0.97,0.97-2.56,0-3.54 c-0.12-0.12-0.25-0.23-0.39-0.32l0.39-0.39c0.97-0.97,0.97-2.56,0-3.54c-0.16-0.16-0.35-0.3-0.54-0.41c0.4-0.92,0.23-2.02-0.52-2.77 c-0.87-0.87-2.22-0.96-3.2-0.28c-0.1-0.15-0.21-0.29-0.34-0.42c-0.97-0.97-2.56-0.97-3.54,0l-2.51,2.51 c-0.09-0.14-0.2-0.27-0.32-0.39C9.58,3.98,8,3.98,7.03,4.95z M8.44,6.37c0.2-0.2,0.51-0.2,0.71,0c0.2,0.2,0.2,0.51,0,0.71 l-3.18,3.18c1.17,1.17,1.17,3.07,0,4.24l1.41,1.41c1.45-1.45,1.82-3.57,1.12-5.36l6.3-6.3c0.2-0.2,0.51-0.2,0.71,0s0.2,0.51,0,0.71 l-4.6,4.6l1.41,1.41l6.01-6.01c0.2-0.2,0.51-0.2,0.71,0c0.2,0.2,0.2,0.51,0,0.71l-6.01,6.01l1.41,1.41l4.95-4.95 c0.2-0.2,0.51-0.2,0.71,0c0.2,0.2,0.2,0.51,0,0.71l-5.66,5.66l1.41,1.41l3.54-3.54c0.2-0.2,0.51-0.2,0.71,0c0.2,0.2,0.2,0.51,0,0.71 L14.1,19.1c-2.54,2.54-6.65,2.54-9.19,0s-2.54-6.65,0-9.19L8.44,6.37z M23,17c0,3.31-2.69,6-6,6v-1.5c2.48,0,4.5-2.02,4.5-4.5H23z M1,7c0-3.31,2.69-6,6-6v1.5C4.52,2.5,2.5,4.52,2.5,7H1z" />
              </svg>
            </span>
          </h3>
          <p>I am Iris, a Virtual Assistant</p>
          <p>How may I help you?</p>
        </div>
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
        <p>
          Frequently Asked Questions
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              enable-background="new 0 0 24 24"
              height="24px"
              viewBox="0 0 24 24"
              width="24px"
              fill="#000000"
            >
              <g>
                <rect fill="none" height="24" width="24" />
              </g>
              <g>
                <path d="M11.07,12.85c0.77-1.39,2.25-2.21,3.11-3.44c0.91-1.29,0.4-3.7-2.18-3.7c-1.69,0-2.52,1.28-2.87,2.34L6.54,6.96 C7.25,4.83,9.18,3,11.99,3c2.35,0,3.96,1.07,4.78,2.41c0.7,1.15,1.11,3.3,0.03,4.9c-1.2,1.77-2.35,2.31-2.97,3.45 c-0.25,0.46-0.35,0.76-0.35,2.24h-2.89C10.58,15.22,10.46,13.95,11.07,12.85z M14,20c0,1.1-0.9,2-2,2s-2-0.9-2-2c0-1.1,0.9-2,2-2 S14,18.9,14,20z" />
              </g>
            </svg>
          </span>
        </p>
        <ul>
          <li>
            <span className="outside">
              <span className="inside"></span>
            </span>
            Can I redeem my FB before the original term?
          </li>
          <li>
            <span className="outside">
              <span className="inside"></span>
            </span>
            How do I pay my Credit card bill?
          </li>
          <li>
            <span className="outside">
              <span className="inside"></span>
            </span>
            How can I get my Account Statement?
          </li>
          <li>
            <span className="outside">
              <span className="inside"></span>
            </span>
            What is the tenure of Fixed Depotsit?
          </li>
        </ul>
        <button className="conversation">
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 0 24 24"
              width="24px"
              fill="#000000"
            >
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path d="M15 4v7H5.17l-.59.59-.58.58V4h11m1-2H3c-.55 0-1 .45-1 1v14l4-4h10c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1zm5 4h-2v9H6v2c0 .55.45 1 1 1h11l4 4V7c0-.55-.45-1-1-1z" />
            </svg>
          </span>
          <span>Start a New Conversation</span>
        </button>
      </section>
    </div>
  );
};

export default Chatbot;
