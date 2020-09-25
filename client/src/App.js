import './App.css';
import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { EmSpacing } from './AppGlobalCss';
import Navbar from './layouts/navbar/Navbar';
import HomePage from './pages/HomePage'
import FeaturePage from './pages/FeaturePage'
import Footer from './layouts/footer/Footer';
import styled from 'styled-components'

let BOX = styled.div`

`
function App() {
	return (
		<>
			{/* <BOX>

			</BOX> */}
			<BrowserRouter>
				<EmSpacing nav />
				<Navbar />
				<Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/feature' component={FeaturePage} />
				</Switch>
				<Footer />
			</BrowserRouter>
		</>
	);
}

export default App;
