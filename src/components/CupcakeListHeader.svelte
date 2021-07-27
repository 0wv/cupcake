<script lang="ts">
    import { cupcakes } from '../stores'

    function removeExpiredCupcakes () {
        $cupcakes = $cupcakes.filter(cupcake => {
            const daysleft = Math.ceil(cupcake.date.diffNow('days').toObject().days)
            return daysleft >= 0
        })
    }
</script>

<div class="flex">
    <div class="flex-1 m-2">
        <div class="p-4 w-full"></div>
    </div>
    <div class="flex-initial m-2">
        <button
            class="p-4 rounded-full"
            on:click={removeExpiredCupcakes}
        >Remove expired cupcakes</button>
    </div>
</div>