import React from 'react';
import Button from './button.jsx';

export default class product extends React.Component{


  render(){
    const buy = () => {
      alert('Clicked ' + this.props.name);
    }

    return(
      <div class="d-flex">
        <tr>
          <td>{this.props.name}</td>
          <td>{this.props.price}</td>
          <td><Button abc={buy}/></td>
        </tr>
      </div>
    );
  }
};
