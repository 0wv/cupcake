<script lang="ts">
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
            Yesterday
            {:else if daysleft === 0}
            Today
            {:else if daysleft === 1}
            Tomorrow
            {:else if Math.sign(daysleft) === -1}
            {Math.abs(daysleft)} days ago
            {:else}
            {daysleft} days left
            {/if}
        </div>
    </div>
</div>