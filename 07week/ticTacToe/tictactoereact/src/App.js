import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

//I need to make the squares for the Xs and Os to be held
const Square = (props) => {
  return (
    <button className="square" onClick={() => props.onClick()}>
    {props.value}
    </button>
  );
}
