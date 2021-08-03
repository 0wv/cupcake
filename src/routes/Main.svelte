<script lang="ts">
    import CupcakeList from '../components/CupcakeList.svelte';
	import CupcakeListHeader from '../components/CupcakeListHeader.svelte';
	import CupcakeNew from '../components/CupcakeNew.svelte';
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
	<CupcakeNew></CupcakeNew>
	<CupcakeListHeader></CupcakeListHeader>
	<div class="mb-auto">
		<CupcakeList></CupcakeList>
	</div>
	<footer>
		<a
			class="block p-2 text-center"
			href="#/credits"
		>{$_('routes.Credits.credits')}</a>
	</footer>
</main>