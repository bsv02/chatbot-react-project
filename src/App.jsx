import './App.css'
import {ChatInput} from './ChatInput';
import {ChatMessages} from './ChatMessages';
import {useState} from 'react'
 
function App() {

  const [chatMessages,setChatMessages] = useState( [{
    message : 'How can I help you !!',
    sender : 'robot',
    id : 'id1'
  }]);
  const [loading,setLoading] = useState(false);
  const [recentMessage,setRecentMessage] = useState('user');

  return(
    <>
      <div className="app-container">
        <ChatMessages chatMessages={chatMessages} loading={loading} recentMessage={recentMessage}/>
        <ChatInput chatMessages={chatMessages} setChatMessages={setChatMessages} setLoading={setLoading} recentMessage={recentMessage} setRecentMessage={setRecentMessage}/>
      </div>
    </>
  );
}

export default App
