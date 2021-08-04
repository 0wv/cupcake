<script lang="ts">
    import { colorByName } from '../colors'
    import type { Color } from '../colors'
    import { color, cupcakes } from '../stores'
    import { DateTime } from 'luxon'
    import { _ } from 'svelte-i18n'
    import style from 'svelte-inline-css'

    function removeExpiredCupcakes () {
        $cupcakes = $cupcakes.filter(cupcake => {
            const daysleft = Math.ceil(DateTime.fromISO(cupcake.date).diffNow('days').toObject().days)
            return daysleft >= 0
        })
    }

    function setColor (newColor: Color) {
        $color = newColor
    }

    let details: HTMLDetailsElement
</script>

<div class="flex flex-wrap sm:flex-nowrap">
    <div class="flex-1 hidden m-2 sm:block">
        <div class="p-4 w-full"></div>
    </div>
    <div class="flex-initial m-2 sm:w-auto w-full">
        <details
            bind:this={details}
            class="p-4"
        >
            <summary>{$_('components.CupcakeListHeader.colors')}</summary>
            <div
                class="fixed h-screen left-0 top-0 w-screen"
                on:click={() => { details.open = false }}
            ></div>
            <div
                class="absolute border-8 gap-2 grid grid-cols-5 grid-rows-5 p-2 shadow-lg"
                use:style={{
                    backgroundColor: $color.background,
                    borderColor: $color.text,
                }}
            >
                {#each [...colorByName.entries()] as [name, color]}
                {#if color.type === 'diverging'}
                <button
                    class="border-0 h-8 rounded-full w-8"
                    on:click={() => {
                        setColor(color)
                        localStorage.setItem('color', name)
                    }}
                    title={name}
                    use:style={{
                        backgroundImage: `linear-gradient(135deg, ${color.list[1]} 0%, ${color.list[1]} 50%, ${color.list[6]} 50%, ${color.list[6]} 100%)`,
                    }}
                ></button>
                {:else if color.type === 'sequential'}
                <button
                    class="border-0 h-8 rounded-full w-8"
                    on:click={() => {
                        setColor(color)
                        localStorage.setItem('color', name)
                    }}
                    title={name}
                    use:style={{
                        backgroundColor: color.list[4],
                    }}
                ></button>
                {/if}
                {/each}
            </div>
        </details>
    </div>
    <div class="flex-initial m-2 sm:w-auto w-full">
        <button
            class="border-2 p-4 rounded-full sm:w-auto w-full"
            on:click={removeExpiredCupcakes}
            use:style={{
                borderColor: $color.text,
            }}
        >{$_('components.CupcakeListHeader.removeExpiredCupcakes')}</button>
    </div>
</div>