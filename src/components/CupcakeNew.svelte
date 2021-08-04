<script lang="ts">
    import { color, cupcakes } from '../stores'
    import { DateTime } from 'luxon'
    import { _ } from 'svelte-i18n'
    import style from 'svelte-inline-css'

    let date = DateTime.now()
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

    function onTouchmove (event) {
        event.preventDefault()
        const swipeInterval = 50
        const touchendY = event.touches[0].pageY

        if (
            Math.abs(touchendY) > Math.abs(touchstartY) + swipeInterval ||
            Math.abs(touchendY) + swipeInterval < Math.abs(touchstartY)
        ) {
            if ((touchendY - touchstartY) > 0) {
                // 下方向にスワイプされたとき
                date = date.minus({ days: 1 })
            } else {
                // 上方向にスワイプされたとき
                date = date.plus({ days: 1 })
            }

            onTouchstart(event)
        }
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

    $: document.documentElement.style.setProperty('--text', $color.text)
</script>

<div class="flex flex-wrap sm:flex-nowrap">
    <div class="flex-initial m-2 sm:flex-1 sm:w-auto w-full">
        <input
            bind:value
            class="border-2 input p-4 rounded-full w-full"
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

<style lang="postcss">
    .input::placeholder {
        @apply opacity-80;
        color: var(--text);
    }
</style>