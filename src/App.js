import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';



class Picture extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pictureClicked: false
    }
  }

  render() {
    return (
      <div onClick= { () => this.setState({ pictureClicked: !this.state.pictureClicked}) }>
      {this.state.pictureClicked ?
        <div>{this.props.source.name}
          <div>Rating: 5</div>
          <img src={this.props.source.link} height="350" width="350"/>
        </div>

        :

        <div>{this.props.source.name}</div>
      }
      </div>
    )
  }
}




class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pictureClicked: false
    }
  }

  render() {
    return (

      <table>
        <tbody>
          {this.props.array.map(source => <Picture source= {source}/>)}
        </tbody>
      </table>

      )
  }
}

export default App;
