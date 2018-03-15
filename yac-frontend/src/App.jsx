import React , {Component} from 'react';
// Components
import { LoginComponent,Narbar } from './components/layouts.jsx'
import { ChatSection } from './components/ChatSection.jsx'
import { MessageSection } from './components/MessageSection.jsx'


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      username:'',
      register:false,
      messages:[]

    }
    this.addUsername = this.addUsername.bind(this)
    this.addMessage = this.addMessage.bind(this)
  }

  addUsername(user){
    this.setState({username:user,register:true})
  }

  addMessage(message) {
    let  {messages} = this.state
    messages.push(message)
    this.setState(prevState => ({messages}));
  }

  componentDidMount() {

   }

   render() {
     if(!this.state.register){
       return <LoginComponent {...this.state}
                addUsername={this.addUsername}
              />
      }
     return (
      <div className="container">
        <Narbar title="Simple Chat" {...this.state} />
        <ChatSection {...this.state} />
        <MessageSection {...this.state} addMessage={this.addMessage}/>
      </div>
     )

   }
}


export default App;
