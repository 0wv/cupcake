<script lang="ts">
    import { _ } from 'svelte-i18n'

    export let cupcake: Cupcake

    const daysleft = Math.ceil(cupcake.date.diffNow('days').toObject().days)
</script>

<div class="flex">
    <div class="flex-1 m-2">
        <div class="p-4">{cupcake.value}</div>
    </div>
    <div class="flex-initial m-2">
        <div class="p-4">
            {#if daysleft === -1}
            {$_('components.CupcakeItem.yesterday')}
            {:else if daysleft === 0}
            {$_('components.CupcakeItem.today')}
            {:else if daysleft === 1}
            {$_('components.CupcakeItem.tomorrow')}
            {:else if Math.sign(daysleft) === -1}
            {Math.abs(daysleft)} {$_('components.CupcakeItem.daysago')}
            {:else}
            {daysleft} {$_('components.CupcakeItem.daysleft')}
            {/if}
        </div>
    </div>
</div>