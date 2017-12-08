import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

//I need to make the squares for the Xs and Os to be held
//I need to allow the square to be clicked so you can add the X or O
const Square = (props) => {
  return (
    <button className="square" onClick={() => props.onClick()}>
    {props.value}
    </button>
  );
}

//I need to make a board consisting of the squares I created above
