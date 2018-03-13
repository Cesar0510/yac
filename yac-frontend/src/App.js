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
      messages: []
    }
    this.editUsername = this.editUsername.bind(this)
    this.emit = this.emit.bind(this)
    this.onMessage = this.onMessage.bind(this)

  }
  componentDidMount() {
    conn.on('connect', () => {
       this.emit('message', {id: conn.id})
     });
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
