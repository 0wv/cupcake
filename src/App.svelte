<script lang="ts">
	import CupcakeList from './components/CupcakeList.svelte';
	import CupcakeListHeader from './components/CupcakeListHeader.svelte';
	import CupcakeNew from './components/CupcakeNew.svelte';
	import Tailwind from './components/Tailwind.svelte';
</script>

<main>
	<CupcakeNew></CupcakeNew>
	<CupcakeListHeader></CupcakeListHeader>
	<CupcakeList></CupcakeList>
</main>

<Tailwind />