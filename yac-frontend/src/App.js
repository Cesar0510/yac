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
      username:''
    }
    this.editUsername = this.editUsername.bind(this)
    this.emit = this.emit.bind(this)
    this.recive = this.recive.bind(this)
  }
  componentDidMount() {
    //conn.on('connect', () => { conn.emit('message', {data: conn.id}); });
  }
  editUsername(u){
    this.setState({username:u})
  }
  emit(ch,msg){ conn.emit(ch,msg) }
  recive(ch){ conn.on(ch, msj =>{
    return msj.data
  })}


   render() {
     console.log('app js');
      return (
         <div className="container">
            <Narbar title="Simple Chat" {...this.state} />
            <ChatSection
              recive={this.recive}
              />
            <MessageSection
              {...this.state}
              editUsername={this.editUsername}
              emit={this.emit}
            />
         </div>
      );
   }
}



export default App;
