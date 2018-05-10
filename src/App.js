import React, {Component} from 'react';
import './App.css';
import Header from './component/header/header'
import Footer from './component/footer/footer'
import {Button} from 'react-bootstrap'
import GenerateNumber from './component/generatenumber/GenerateNumber'

class App extends Component {
  constructor(props){
    super(props);
    this.state = {flag : false};
  }

  handleClick = () => {
    this.setState(prevState => ({
      flag: !prevState.flag
    }));
  }

  render() {
    return (
      <div className="container border border-primary">
        <Header></Header>
        <div className="container border border-primary" onClick={this.handleClick}>
        {this.state.flag ? <Button bsStyle="primary">hide</Button> : <Button bsStyle="primary">show</Button>}
        </div>
        {this.state.flag ? (<div className="col-6">
            <GenerateNumber/>
        </div>) : null}
        <Footer></Footer>
      </div>
    );
  }
}

export default App;
