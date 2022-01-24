import { createContext, useReducer } from 'react';

export const store = createContext();
const initialState = {
  darkMode: false,
};

export function StoreProvider(props) {
  const [state, dispatch] = useReducer(reducer, initialState);
}
