import styled from 'styled-components';
import fonts from '@variables/fonts';
import { toLarge } from '@utils/mediaQueries';

const Title = styled.h1`
	font-size: 3.6rem;
	text-align: center;
	width: 80vw;
	font-family: ${fonts.montserrat};
	font-weight: 700;
	line-height: 1.5;

	${toLarge`
	    font-size: 2rem
	`}
`;

export default Title;
