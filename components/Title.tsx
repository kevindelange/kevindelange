import styled from 'styled-components';
import fonts from '@variables/fonts';
import { toMedium } from '@utils/mediaQueries';

const Title = styled.h1`
	font-size: 3.6rem;
	text-align: center;
	width: 80vw;
	font-family: ${fonts.montserrat};

	${toMedium`
	    font-size: 2rem
	`}
`;

export default Title;
