import {  FormControl, Input } from '@material-ui/core';
import React, {useState, useEffect} from 'react';
import './App.css';
import db from './firebase';
import Message from './Message';
import firebase from 'firebase';
import FlipMove from 'react-flip-move';
import { IconButton } from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send';


function App() {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);
  const [username, setusername] = useState('');

  useEffect(() => {
    db.collection('messages')
    .orderBy('timestamp', 'desc')
    .onSnapshot(snapshot => {
      setMessages(snapshot.docs.map(doc => ({id: doc.id, message: doc.data()})))
    })
  }, []);

  useEffect(() => {
    setusername(prompt('Enter username ...'));
  }, []);

  console.log(input);

  const sendMessage=(event)=>{
    event.preventDefault();

    db.collection('messages').add({
      message: input,
      username: username,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })
    // setMessages([...messages, {username: username, text: input}]);
    setInput('');
  }

  return (
    <div className="App">
      <img src="https://facebookbrand.com/wp-content/uploads/2020/10/Logo_Messenger_NewBlurple-399x399-1.png?w=100&h=100"/>
      <h2>Welcome {username}</h2>
      <form className="app_form">
        <FormControl className="app_formControl">
          <Input className="app_input" placeholder='Enter a message...' value={input} onChange={event=>setInput(event.target.value) }/>
          <IconButton className="app_iconButton" disabled={!input} color="primary" variant="contained" type="submit" onClick={sendMessage}>
            <SendIcon/>
          </IconButton>
          {/* <Button disabled={!input} color="primary" variant="contained" type="submit" onClick={sendMessage}>send message</Button> */}
        </FormControl>
      </form>

      <FlipMove>
        {
          messages.map(({id, message}) => {
            return <Message key={id} username={username} message = {message}/>
        })
  
        }
      </FlipMove>

      

    </div>
  );
}

export default App;
