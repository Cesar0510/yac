import React, {Component} from 'react';



export  class MessageSection extends Component {
  constructor(props) {
      super(props);
      this.state = {
        value:''
      };
      //Methods
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
    // vars

    handleChange(event) {
      this.setState({value: event.target.value});
    }

    handleSubmit(event) {
      let user = this.props.username
      if(!user){
        user = prompt("Please enter your name", "username");
        this.props.editUsername(user)
      }
      console.log('send msg');
      this.props.emit('message',{
        message: this.state.value,
        username: user ,
        register:this.state.register
      });
      this.setState({value:'' });
      event.preventDefault();
    }

  // Render
  render() {
    return (
       <div className ="panel-footer">
          <form onSubmit={this.handleSubmit} className ="input-group">
           <input id="btn-input" type="text" className="form-control input-sm"  placeholder="Type your message here..." value={this.state.value} onChange={this.handleChange} />
           <span className="input-group-btn">
            <button className="btn btn-warning btn-sm" id="btn-chat" value='' type="submit"> Send</button>
           </span>
         </form>
         </div>
     )
  }
}
