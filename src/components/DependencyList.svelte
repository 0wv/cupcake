<script lang="ts">
    import DependencyItem from './DependencyItem.svelte'
    import { color } from '../stores'
    import style from 'svelte-inline-css'

    export let dependencies
</script>

<div class="divide-y flex flex-col">
    {#each dependencies as dependency}
        <div use:style={{ borderColor: $color.text }}>
            <DependencyItem {dependency}></DependencyItem>
        </div>
    {/each}
</div>