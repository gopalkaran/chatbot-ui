import React, {useState} from "react";
import './App.css';
import Chatbot from "./mycomponent/Chatbot";
import ChatbotInactive from "./mycomponent/ChatbotInactive";
import Header from "./mycomponent/Header";
import Footer from "./mycomponent/Footer";
import Main from "./mycomponent/Main";

function App() {
  const [window, setWindow] = useState(false);

  const toggleWindow = () =>{
    setWindow(window => !window);
  }
  return (
    <div className="App">
       <Header />
       { window ?
       <Chatbot toggleWindow={toggleWindow} /> :
       <ChatbotInactive toggleWindow={toggleWindow} />
      }
      <Main />
      <Footer />
    </div>
  );
}

export default App;
