import React from 'react';

export interface IAuthContext {
  isLoggedIn: boolean;
  setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>
  signIn: () => void;
  signOut: () => void;
}