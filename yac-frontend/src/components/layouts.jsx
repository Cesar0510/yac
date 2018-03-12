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
