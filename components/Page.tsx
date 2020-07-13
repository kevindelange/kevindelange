import styled from 'styled-components';
import colors from '@variables/colors';

const Page = styled.section`
	min-height: 100vh;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	background: linear-gradient(to bottom, white 60%, ${colors.gallery});
`;

export default Page;
