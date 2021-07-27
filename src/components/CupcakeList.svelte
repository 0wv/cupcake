<script lang="ts">
    import CupcakeItem from './CupcakeItem.svelte';
    import { cupcakes } from '../stores';
</script>

{#each $cupcakes as cupcake}
    <CupcakeItem {cupcake}></CupcakeItem>
{/each}