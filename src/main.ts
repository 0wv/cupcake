import App from './App.svelte';

const app = new App({
	target: document.body,
	props: {
		name: 'svelte + tailwind world'
	}
});

export default app;