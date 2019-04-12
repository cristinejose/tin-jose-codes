import React, { Component } from 'react';
import logo from './logo.svg';
import './css/App.css';
import Header from './components/header.jsx';
import Footer from './components/footer.jsx';
import Body from './components/body.jsx';
import Form from './components/form.jsx';



class App extends Component {
  render() {
 
    console.log('sample coomit');

    return (
      <div className = 'my-app'>
      <Header/>
      <Body />
      <Form/>

      <Footer/>
      </div>
    );
  }
}

export default App;
