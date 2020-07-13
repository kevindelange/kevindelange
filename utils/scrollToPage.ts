const scrollToPage = (id: string) => {
	if (process.browser) {
		document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
	}
};

export default scrollToPage;
