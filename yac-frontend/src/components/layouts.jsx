import React, {Component} from 'react';
//import axios from 'axios';


export class Narbar extends Component {
   render() {
      return (
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item active" aria-current="page">{this.props.title}</li>
          </ol>
        </nav>
      );
   }
}


export class LoginComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user:''
    };
    //Methods
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(e) {
    this.setState({user: e.target.value});
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.user);
    this.props.addUsername(this.state.user)
    event.preventDefault();
  }


  render(){
    return (
      <div className="col-md-4 col-md-offset-4">
        <div className="login-panel panel panel-default">
          <div className="panel-heading">
            <h3 className="panel-title">Please Sign In</h3>
          </div>
          <div className="panel-body">
            <form onSubmit={this.handleSubmit} >
              <fieldset>
              <div className="form-group">
                <input className="form-control" placeholder="username" name="username" autoFocus="" type="text" value={this.state.user} onChange={this.handleChange}/>
              </div>
                <input type='submit' className="btn btn-lg btn-success btn-block" value='Login'/>
              </fieldset>
            </form>
          </div>
        </div>
      </div>
    )
  }
}



