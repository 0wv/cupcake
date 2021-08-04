<script lang="ts">
    import CupcakeItem from './CupcakeItem.svelte';
    import { cupcakes } from '../stores';
</script>

<div class="mb-auto">
    {#each $cupcakes as cupcake}
    <CupcakeItem {cupcake}></CupcakeItem>
    {/each}
</div>