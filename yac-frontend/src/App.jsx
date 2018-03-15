import React , {Component} from 'react';
// Components
import { LoginComponent } from './components/layouts.jsx'
//import { ChatSection } from './components/ChatSection.jsx'
//import { MessageSection } from './components/MessageSection.jsx'


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      username:'',
      register:false,
    }
  }

  componentDidMount() {
    fetch('http://localhost:5000/')
      .then((response) => {
        console.log(response)
       })
   }

   render() {
     if(this.state.register){
       return <LoginComponent/>
      }
     return (
       <h1>hola</h1>
     )

   }
}


export default App;
