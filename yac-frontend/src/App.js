import React , {Component} from 'react';
// Components
import { Narbar } from './components/layouts.jsx'
import { ChatSection } from './components/ChatSection.jsx'
import { MessageSection } from './components/MessageSection.jsx'

import io from 'socket.io-client'
let ServerUri = 'http://localhost:5000'// 'ws://echo.websocket.org/"'
let conn = io(ServerUri)

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      username:'',
      messages: [],

    }
    this.editUsername = this.editUsername.bind(this)
    this.emit = this.emit.bind(this)
    this.onMessage = this.onMessage.bind(this)
    this.addMessage = this.addMessage.bind(this)

  }
  componentDidMount() {
    conn.on('connect', () => {
      console.log('a user connected');
      conn.on('disconnect', () => { console.log('user disconnected'); });
      conn.on('chat message', msg => {
        let {messages} = this.state;
        messages.push(msg);
        this.setState({messages})
      })
    })
  }

  addMessage(msg){
    let {messages} = this.state;
    messages.push(msg);
    this.setState(prevState => ({messages}));
  }

  editUsername(u){
    this.setState({username:u})
  }

  emit(ch,msg){
    conn.emit(ch,msg)
  }

  onMessage(){
    conn.on('chat message', (msg) => {
      let msgs = this.state.messages
      msgs.push(msg)
      this.setState({msgs})
  })
}

   render() {
      return (

         <div className="container">
            <Narbar title="Simple Chat" {...this.state} />
            <ChatSection
              {...this.state}
              onMessage={this.onMessage}
              />
            <MessageSection
              { ...this.state }
              editUsername={this.editUsername}
              emit={this.emit}
            />
         </div>
      );
   }
}



export default App;
