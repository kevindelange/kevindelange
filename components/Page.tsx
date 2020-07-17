import styled from 'styled-components';
import colors from '@variables/colors';
import { toLarge } from '@utils/mediaQueries';

const Page = styled.section`
	min-height: 100vh;
	padding: 6rem 0;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	background: linear-gradient(to bottom, white 60%, ${colors.gallery});
	${toLarge`
	    padding: 8rem 0 3rem;
	`};
`;

export default Page;
