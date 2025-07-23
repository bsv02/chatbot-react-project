import './ChatInput.css';
import {useState} from 'react';
import {robotResponse} from './utils/robot-tasks.js';
import {ToastContainer,toast} from 'react-toastify';

export function ChatInput({chatMessages,setChatMessages,setLoading,setRecentMessage}){
  const [inputText,setInputText] = useState('');
  const [robotReplying,setRobotReplying] = useState(false);

  function renderUserMessage(){
    if(robotResponding()) return;

    if(inputText.trim() === ''){
      toast('Enter a valid message');
      return;
    }
    const newUserMessage = {
      message :inputText,
      sender :'user',
      id : crypto.randomUUID()
    }
    const updatedMessage = [...chatMessages , newUserMessage];
    setChatMessages(updatedMessage);
    setRecentMessage('user');
    setInputText('');
    setTimeout(() => {
      setRecentMessage('robot');
      setLoading(true);
    },500);
    renderRobotMessage(updatedMessage,inputText);
  }

  function renderRobotMessage(previousMessages,userText){
    setRobotReplying(true);
    setTimeout(async() => {
      const response = await robotResponse(userText);
        setChatMessages([
          ...previousMessages,
          {
            message : response,
            sender : 'robot',
            id : crypto.randomUUID()
          }
        ]);
      setLoading(false);
      setRobotReplying(false);
    },1000);
  }

  function saveInputText(event){
    setInputText(event.target.value);
  }

  function handleEnterKey(event){
    if (event.key === 'Enter' && !robotReplying){
      renderUserMessage();
    }
  }

  function robotResponding(){
    if(robotReplying){
      toast('Please wait for the robot to respond');
      return true;
    }
    return false;
  }

  return(
    <>
      <div className = "input-and-send">
        <input  
          className = "chat-input"
          type = "text"
          placeholder = "Enter a message"
          value = {inputText}
          onChange = {saveInputText}
          onKeyDown = {handleEnterKey}
        />
        <button 
          className = "send-button" 
          onClick = {renderUserMessage} 
          disabled = {robotReplying}
        >
          Send
        </button>      
      </div>

      <ToastContainer/>
    </>

  );
}