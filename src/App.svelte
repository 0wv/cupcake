<script lang="ts">
	import Tailwind from './components/Tailwind.svelte';
	import './i18n';
	import Credits from './routes/Credits.svelte';
	import Main from './routes/Main.svelte';
	import Router from 'svelte-spa-router';

	const routes = {
		'/': Main,
		'/credits': Credits,
	}
</script>

<Router {routes}></Router>

<Tailwind />

<style lang="postcss">
	:global(body) {
		@apply p-0;
	}
</style>