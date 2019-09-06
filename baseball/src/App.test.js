import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/react/cleanup-after-each';
import App from './App.js';

describe('<App />', () => {
  it('renders without crashing', () => {
      render(<App />);
  });
  it ('A BIG TEST', () => {
    const { getByText } = render(<App />);
    const strike = getByText(/^strike$/i);
    const ball = getByText(/^ball$/i);
    const foul = getByText(/^foul$/i);
    const hit = getByText(/^hit$/i);
  });
});
