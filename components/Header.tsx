import React from 'react';
import styled from 'styled-components';

const StyledHeader = styled.header`
	padding: 2rem;
	display: flex;
`;

const Name = styled.div`
	font-family: 'Montserrat', sans-serif;
	font-weight: 700;
	text-transform: uppercase;
	font-size: 1.8rem;
`;

const Role = styled.div`
	font-family: 'Montserrat', sans-serif;
	font-weight: 400;
	text-transform: uppercase;
	font-size: 1.8rem;
	margin-left: 1rem;
	opacity: 0.5;
`;

const Header: React.FunctionComponent = () => {
	return (
		<StyledHeader>
			<Name>Kevin de Lange</Name>
			<Role>Frontend Developer</Role>
		</StyledHeader>
	);
};

export default Header;
