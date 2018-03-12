import React, {Component} from 'react';
export  class ChatSection extends Component {
   render() {
     let messagesList = []
     return (
      <div className="panel-body">
        <ul className="chat">
          <ChatList messages={messagesList}/>
        </ul>
      </div>
      )
   }
}


class ChatList  extends Component {
  render()  {
    console.log(this.props.recive('chat message'));
    return(
      this.props.messages.map((message,index) =>{
        return (<Chat key={index} id={index} message={message}/>)
      }
      )
    )
  }

}

class Chat  extends Component {
  render() {
    let message  = this.props.message
    console.log(this.props);
    return (
    <li className="left clearfix"><span className="chat-img pull-left">
      <img src="http://placehold.it/50/55C1E7/fff&text=U" alt="User Avatar" className="img-circle" />
    </span>
    <div className="chat-body clearfix">
      <div className="header">
        <strong className="primary-font">{ message.name }</strong> <small className="pull-right text-muted">
          <span className="glyphicon glyphicon-time"></span>{new Date().toLocaleTimeString()}</small>
        </div>
        <p> {message.data} </p>
      </div>
    </li>
    )
  }
}
