import React, {Component} from 'react';
import './App.css';
import Header from './component/header/header'
import Footer from './component/footer/footer'
import {Button} from 'react-bootstrap'
import GenerateNumber from './component/generatenumber/GenerateNumber'

class App extends Component {
  test = () => {
    alert("hello");
  }

  render() {
    return (
      <div class="container border border-primary">
        <Header></Header>
        <div class="container border border-primary" onClick={this.test}>
          <Button bsStyle="primary">click me</Button>
        </div>
        <GenerateNumber/>
        <Footer></Footer>
      </div>
    );
  }
}

export default App;
