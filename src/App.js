import React, { Component } from 'react';
import Header from './components/Header.jsx';
import MainSection from './components/MainSection.jsx'
import Footer from './components/Footer.jsx'

class App extends Component {
  render() {
    return  <section className="todoapp">
      <Header></Header>
      <MainSection></MainSection>
      <Footer></Footer>
    </section> 
  }
}

export default App;
