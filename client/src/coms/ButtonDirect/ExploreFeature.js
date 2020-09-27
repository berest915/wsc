import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const ExploreFeature = () => {
	return (
		<>
			<Div>
				<Link to='/feature'>EXPLORE FEATURES</Link>
			</Div>
		</>
	);
};

export default ExploreFeature;

const Div = styled.div`
	padding: 84px 0;
	text-align: center;
	a {
		text-decoration: none;
		color: #1cb39b;
		border: 2px solid #77d7c8;
		border-radius: 40px;
		font-weight: 500;
		font-size: 1rem;
		letter-spacing: 0.071rem;
		padding: 18px 32px;
	}
`;
