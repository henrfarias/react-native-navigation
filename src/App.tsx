import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { AuthProvider } from './Contexts/AuthContext';
import Routes from './Routes';


export default function App() {
  return (
    <AuthProvider>
      <Routes />
      <StatusBar style='dark' />
    </AuthProvider>
  );
}

