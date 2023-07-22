import React from 'react';
import Message from './Message';

const dummyData = [
    "Hello there!",
    "How's it going?",
    "Nice to meet you.",
    "This is a sample message.",
    "Goodbye!",
];

const MessageList = () => {
    return (
        <div>
            {dummyData.map((message, index) => (
                <Message key={index} message={message} />
            ))}
        </div>
    );
};

export default MessageList;
