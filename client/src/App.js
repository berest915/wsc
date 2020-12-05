import './App.css';
import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { EmSpacing } from './AppGlobalCss';
import Navbar from './layouts/navbar/Navbar';
import HomePage from './pages/HomePage';
import FeaturePage from './pages/FeaturePage';
import FaqPage from './pages/FaqPage';
import Footer from './layouts/footer/Footer';

function App() {
	return (
		<>
			<BrowserRouter>
				<EmSpacing nav />
				<Navbar />
				<Switch>
          <Route exact path='/wsc/' component={HomePage} />
          <Route exact path='/wsc/feature' component={FeaturePage} />
					<Route exact path='/wsc/faq' component={FaqPage} />
				</Switch>
				
				<Footer />
			</BrowserRouter>
		</>
	);
}

export default App;

