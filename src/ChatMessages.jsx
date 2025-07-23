import './ChatMessages.css'
import {ChatMessage} from './ChatMessage';
import {useEffect,useRef} from 'react';

export function ChatMessages({chatMessages,loading,recentMessage}){
  const chatMessagesRef = useRef(null);
  
  useEffect(() => {
    const containerElem = chatMessagesRef.current;
    if((recentMessage === 'user' || recentMessage === 'robot') && containerElem){
      containerElem.scrollTo({
        top:containerElem.scrollHeight,
        behavior:'smooth'
      });
    }
  },[chatMessages,recentMessage]);

  return(
    <div className="chat-messages-container" ref={chatMessagesRef}>
      {chatMessages.map((chatMessage) => {
        return(
          <ChatMessage 
            message = {chatMessage.message}
            sender = {chatMessage.sender}
            key = {chatMessage.id}
            loading={false}
          />
        );
      })}

      {loading && (
        <ChatMessage
          key="loading"
          message=""
          sender="robot"
          loading={true} 
        />
      )}
    </div>
  );
}