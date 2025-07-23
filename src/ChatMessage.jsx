import './ChatMessage.css'

export function ChatMessage({message,sender,loading}){
  return(
    <div className={sender === 'user' ? "human-message-container" : "robot-message-container"}>

      {sender === 'robot' && (
        <img className="robot-icon" src="/robot-icon.png"/>
      )}
      <div className="message-text">
        <div dangerouslySetInnerHTML={{__html:message}}/>
        {sender === 'robot' && loading && (
          <div className="spinner-container">
            <img 
              src="/loading-icon.gif"
              alt="loading..."
            />
          </div>
        )}
      </div>
      {sender ==='user' && (
        <img className="human-icon" src="/user-icon.png"/>
      )}

    </div>
  );
}