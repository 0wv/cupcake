<script lang="ts">
    import { cupcakes } from '../stores'
    import { DateTime } from 'luxon'

    let date = DateTime.now()
    let value = ''

    function newCupcake () {
        const cupcake: Cupcake = {
            date,
            value,
        }
        $cupcakes.push(cupcake)
        $cupcakes = $cupcakes
    }

    function onWheel (event) {
        if (event.deltaY > 0) {
            date = date.plus({ days: 1 })
        } else {
            date = date.minus({ days: 1 })
        }
    }
</script>

<div class="flex">
    <div class="flex-1 m-2">
        <input
            bind:value
            class="p-4 rounded-full w-full"
            type="text"
        >
    </div>
    <div class="flex-initial m-2">
        <div
            class="p-4"
            on:wheel={onWheel}
        >{date.toISODate()}</div>
    </div>
    <div class="flex-initial m-2">
        <button
            class="p-4 rounded-full"
            on:click={newCupcake}
        >New Cupcake</button>
    </div>
</div>