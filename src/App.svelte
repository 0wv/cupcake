<script lang="ts">
	import { colorByName } from './colors';
	import Font from './components/Font.svelte';
	import Tailwind from './components/Tailwind.svelte';
	import './i18n';
	import Credits from './routes/Credits.svelte';
	import Main from './routes/Main.svelte';
	import { color, cupcakes } from './stores';
	import Router from 'svelte-spa-router';

	const routes = {
		'/': Main,
		'/credits': Credits,
	}

	// if has item
    if (localStorage.getItem('color') !== null) {
        $color = colorByName.get(localStorage.getItem('color'))
    }

    if (localStorage.getItem('cupcakes') !== null) {
        $cupcakes = JSON.parse(localStorage.getItem('cupcakes')) as Cupcake[]
    }
</script>

<Router {routes}></Router>

<Font></Font>
<Tailwind />

<style lang="postcss">
	:global(body) {
		@apply p-0;
	}
</style>