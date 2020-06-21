import React, {Component} from 'react';
import Header from "./Header";
import Body from "./Body";
import './App.css';
import { render } from '@testing-library/react';

export default class App extends Component {

  render(){
    return(
    <div>
        <Header />
        <Body />
    </div>
    );
  }
}




