<script lang="ts">
    import CupcakeList from '../components/CupcakeList.svelte';
	import CupcakeListHeader from '../components/CupcakeListHeader.svelte';
	import CupcakeNew from '../components/CupcakeNew.svelte';
	import { logo } from '../fonts'
	import { color } from '../stores';
	import { _ } from 'svelte-i18n'
	import style from 'svelte-inline-css';
</script>

<main
	class="flex flex-col min-h-full"
	use:style={{
		backgroundColor: $color.background,
		color: $color.text,
	}}
>
	<h1
		class="p-2 text-2xl"
		use:style={{
			fontFamily: logo,
		}}
	>Cupcake 🧁</h1>
	<CupcakeNew></CupcakeNew>
	<CupcakeListHeader></CupcakeListHeader>
	<CupcakeList></CupcakeList>
	<footer>
		<a
			class="block p-2 text-center"
			href="#/credits"
		>{$_('routes.Credits.credits')}</a>
	</footer>
</main>