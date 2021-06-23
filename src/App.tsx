import React from 'react';
import { StatusBar } from 'expo-status-bar';
import Routes from './Routes';


export default function App() {
  return (
    <>
      <Routes />
      <StatusBar style='dark' />
    </>
  );
}

