import { css, CSSObject } from 'styled-components';

const all = 'all';
const small = 'small';
const medium = 'medium';
const large = 'large';
const extraLarge = 'extraLarge';

const sixteenth = 1 / 16;
export const breakPoints = {
	[small]: 36,
	[medium]: 48,
	[large]: 62,
	[extraLarge]: 82
};
const calcMaxWidth = (size: string) => {
	return `${breakPoints[size] - sixteenth}em`;
};
const mediaQueries = {
	[small]: {
		greater: '(min-width: 36em)',
		lesser: `(max-width: ${calcMaxWidth(small)})`
	},
	[medium]: {
		greater: '(min-width: 48em)',
		lesser: `(max-width: ${calcMaxWidth(medium)})`
	},
	[large]: {
		greater: '(min-width: 62em)',
		lesser: `(max-width: ${calcMaxWidth(large)})`
	},
	[extraLarge]: {
		greater: '(min-width: 82em)',
		lesser: `(max-width: ${calcMaxWidth(extraLarge)})`
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

export const fromSmall = mq({ from: small });
export const toSmall = mq({ to: small });
export const fromMedium = mq({ from: medium });
export const toMedium = mq({ to: medium });
export const fromLarge = mq({ from: large });
export const toLarge = mq({ to: large });
export const fromExtraLarge = mq({ from: extraLarge });
export const toExtraLarge = mq({ to: extraLarge });
