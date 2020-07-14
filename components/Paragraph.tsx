import styled from 'styled-components';
import fonts from '@variables/fonts';
import { toMedium } from '@utils/mediaQueries';

const Paragraph = styled.p`
	font-size: 1.8rem;
	text-align: center;
	width: 80vw;
	margin: 4rem 0;
	font-family: ${fonts.roboto};

	${toMedium`
	    font-size: 1.6rem
	`}
`;

export default Paragraph;
