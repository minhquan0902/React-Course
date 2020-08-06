import React, { Component } from 'react';
import Home from "./HomeComponent";
import Menu from './MenuComponent';
import Header from "./HeaderComponent";
import {DISHES} from '../shared/dishes';
import { Switch, Route, Redirect} from 'react-router-dom';
import Footer from './FooterComponent';
import DishDetail from './DishdetailComponent';

class Main extends Component {
  constructor(props){
    super(props);

    this.state ={
      dishes: DISHES,
    };
  }

  render(){

  const HomePage =()=>{
    return(
      <Home/>
    );
  }
  return (
    <div className="App">
      <Header></Header>
      <Switch>
        <Route path ="/home" component={HomePage}/>
        <Route exact path="/menu" component={() =><Menu dishes ={this.state.dishes}/>}/>
        <Redirect to ="/home"/>
      </Switch>
      <Footer/>
    </div>
  );
}
}

export default Main;
