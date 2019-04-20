import React, { Component } from 'react';
import Header from './containers/Header';
import MainSection from './containers/MainSection'

class App extends Component {
  render() {
    return  <section className="todoapp">
      <Header></Header>
      <MainSection></MainSection>
    </section> 
  }
}

export default App;
