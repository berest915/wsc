import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BreakpointProvider } from './IndexContextProvider/breakpoint';

const queries = {
  xs: '(max-width: 320px)',
  sm: '(max-width: 500px)',
  md: '(max-width: 700px)',
  lg: '(max-width: 1024px)',
  or: '(orientation: portrait)',
};

ReactDOM.render(
  <BreakpointProvider queries={queries}>
		<App />
	</BreakpointProvider>,
  document.getElementById('root')
);

