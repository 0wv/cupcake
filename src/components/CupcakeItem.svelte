<script lang="ts">
    import { main } from '../fonts'
    import { DateTime } from 'luxon'
    import { _ } from 'svelte-i18n'
    import style from 'svelte-inline-css'

    export let cupcake: Cupcake

    const daysleft = Math.ceil(DateTime.fromISO(cupcake.date).diffNow('days').toObject().days)
</script>

<div class="flex">
    <div class="flex-1 m-2">
        <div use:style={{ fontFamily: main }}>{cupcake.value}</div>
    </div>
    <div class="flex-initial m-2">
        <div use:style={{ fontFamily: main }}>
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