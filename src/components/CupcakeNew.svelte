<script lang="ts">
    import { color, cupcakes } from '../stores'
    import { DateTime } from 'luxon'
    import { _ } from 'svelte-i18n'
    import style from 'svelte-inline-css'

    let date = DateTime.now()
    let touchendY = 0
    let touchstartY = 0
    let value = ''

    function newCupcake () {
        const cupcake: Cupcake = {
            date: date.toString(),
            value,
        }
        $cupcakes.push(cupcake)
        $cupcakes = $cupcakes
        localStorage.setItem('cupcakes', JSON.stringify($cupcakes))
    }

    function onTouchend () {
        if ((touchendY - touchstartY) > 0) {
            // 下方向にスワイプされたとき
            date = date.minus({ days: 1 })
        } else {
            // 上方向にスワイプされたとき
            date = date.plus({ days: 1 })
        }
    }

    function onTouchmove (event) {
        touchendY = event.touches[0].pageY
    }

    function onTouchstart (event) {
        touchstartY = event.touches[0].pageY
    }

    function onWheel (event) {
        if (event.deltaY > 0) {
            date = date.plus({ days: 1 })
        } else {
            date = date.minus({ days: 1 })
        }
    }
</script>

<div class="flex flex-wrap sm:flex-nowrap">
    <div class="flex-initial m-2 sm:flex-1 sm:w-auto w-full">
        <input
            bind:value
            class="border-2 p-4 rounded-full w-full"
            placeholder={$_('components.CupcakeNew.whatKindOfCupcake')}
            type="text"
            use:style={{
                backgroundColor: $color.background,
                borderColor: $color.text,
            }}
        >
    </div>
    <div class="flex-1 m-2 sm:flex-initial">
        <div
            class="border-2 border-dotted p-4 rounded-full text-center"
            on:touchend={onTouchend}
            on:touchmove={onTouchmove}
            on:touchstart={onTouchstart}
            on:wheel={onWheel}
            use:style={{
                borderColor: $color.text,
            }}
        >📅 {date.toISODate()}</div>
    </div>
    <div class="flex-1 m-2 sm:flex-initial">
        <button
            class="border-2 p-4 rounded-full w-full"
            on:click={newCupcake}
            use:style={{
                borderColor: $color.text,
            }}
        >{$_('components.CupcakeNew.newCupcake')}</button>
    </div>
</div>