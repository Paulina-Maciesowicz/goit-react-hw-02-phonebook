import React from 'react';
import { SignUpForm } from './Input/Input';
import { Component } from './Input/Input';

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <Component/>
      <SignUpForm />
      <Component />
    </div>
  );
};
