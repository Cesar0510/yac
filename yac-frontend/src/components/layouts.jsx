import React, {Component} from 'react';


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
  render(){
    return (
      <div className="col-md-4 col-md-offset-4">
        <div className="login-panel panel panel-default">
          <div className="panel-heading">
            <h3 className="panel-title">Please Sign In</h3>
          </div>
          <div className="panel-body">
            <form>
              <fieldset>
              <div className="form-group">
                <input className="form-control" placeholder="username" name="username" autoFocus="" type="text"/>
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


// {/* <div className="container">
// <Narbar title="Simple Chat" {...this.state} />
// <ChatSection recive={this.recive} />
// <MessageSection {...this.state} />
// <div> */}
