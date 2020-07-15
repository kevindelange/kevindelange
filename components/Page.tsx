import styled from 'styled-components';
import colors from '@variables/colors';
import { toMedium } from '@utils/mediaQueries';

const Page = styled.section`
	min-height: 100vh;
	padding: 6rem 0;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	background: linear-gradient(to bottom, white 60%, ${colors.gallery});
	${toMedium`
	    padding: 3rem 0;
	`};
`;

export default Page;
