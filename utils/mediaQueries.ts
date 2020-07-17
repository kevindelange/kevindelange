import { css, CSSObject } from 'styled-components';

const all = 'all';
const large = 'large';

const sixteenth = 1 / 16;
export const breakPoints = {
	[large]: 830
};
const calcMaxWidth = (size: string) => {
	return `${breakPoints[size] - sixteenth}px`;
};
const mediaQueries = {
	[large]: {
		greater: '(min-width: 830px)',
		lesser: `(max-width: ${calcMaxWidth(large)})`
	}
};
interface Props {
	from?: string;
	to?: string;
}
export const getMediaQueryString = (props: Props) => {
	const { from, to } = props;
	const mediaFrom = from ? mediaQueries[from].greater : null;
	const mediaTo = to ? mediaQueries[to].lesser : null;

	if (mediaFrom && mediaTo) {
		return `${mediaFrom} and ${mediaTo}`;
	}

	return mediaFrom || mediaTo;
};

export const mq = (props: any) => (templateLiteral: TemplateStringsArray | CSSObject, ...interpolations: any) => {
	const mediaQueryString = getMediaQueryString(props);
	const cssProps = css(templateLiteral, ...interpolations);

	return mediaQueryString === all
		? cssProps
		: css`
				@media ${mediaQueryString} {
					${cssProps};
				}
		  `;
};

export const fromLarge = mq({ from: large });
export const toLarge = mq({ to: large });
