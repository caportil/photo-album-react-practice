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


class Dropdown extends Component {
  constructor(props) {
    super(props);
    this.state = {
      initialClick: false,
      rating: 3
    }
  }

  render() {
    return (
      <div onClick= {function() {
        var selection = (document.getElementById('selection')).options[document.getElementById('selection').selectedIndex]);
        this.setState({initialClick: !this.state.initialClick });

      }}>

      {this.state.initialClick ?

        <td>
        <select id="selection">
          <option id="five">5</option>
          <option id="three">3</option>
          <option id="one">1</option>
        </select>
        </td>

        :

        <td>
        <select id="selection">
          <option id="five">5</option>
          <option id="three">3</option>
          <option id="one">1</option>
        </select>
        </td>

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
        <Dropdown />
      </table>

      )
  }
}

export default App;
