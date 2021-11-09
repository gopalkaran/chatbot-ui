import React from 'react';
import '../css/chatbotinactive.css';

const ChatbotInactive = ({toggleWindow}) => {
    return (
        <div className="chat-inactive" onClick={toggleWindow}>
            Say Hi to IRIS
        </div>
    )
}

export default ChatbotInactive
