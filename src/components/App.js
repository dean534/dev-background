import React from 'react';
import { Route } from 'react-router-dom';
import Home from './pages/home/Home';
import Demo from './pages/demo/Demo';
import About from './pages/about/About';
import Header from './general/header/Header';
import Footer from './general/footer/Footer';
import Carousel from './general/Carousel';


export default class App extends React.Component {
  render() {
    return (
      <div>
        <Header>
          <h1>213</h1>
        </Header>
        <Route exact path="/" component={Home} />
        <Route path="/Demo" component={Demo} />
        <Route path="/About" component={About} />
        <Footer />
        <Carousel>
          <img src="./static/components/aboveWater.jpg"  alt="123"/>
          <img src="./../images/couple.jpg" />
          <img src="./../images/dragonboat.jpg" />
          <img src="./../images/sunRaise.jpg" />
        </Carousel>
      </div>
    );
  }
}
