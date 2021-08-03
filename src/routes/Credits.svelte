<script lang="ts">
    import DependencyList from '../components/DependencyList.svelte'
    import { color } from '../stores'
    import { _ } from 'svelte-i18n'
    import style from 'svelte-inline-css'

    const fetchDependencies = (async () => {
        const responseA = await fetch('/dependencies.json')
        const responseB = await fetch('/build/dependencies.json')
        const jsonA = await responseA.json()
        const jsonB = await responseB.json()
        return [...jsonA, ...jsonB]
    })()
</script>

<div
    class="flex flex-col min-h-full"
    use:style={{
        backgroundColor: $color.background,
        color: $color.text,
    }}
>
    <a
        class="p-2"
        href="#/"
    >{$_('routes.Credits.returnToMainPage')}</a>
    <div class="mb-auto">
        <h1 class="p-2 text-2xl">{$_('routes.Credits.credits')}</h1>
        <h2 class="p-2 text-xl">{$_('routes.Credits.dependencies')}</h2>
        <details class="p-2">
            <summary>{$_('routes.Credits.listOfDependencies')}</summary>
            {#await fetchDependencies}
            <p>{$_('routes.Credits.waiting')}</p>
            {:then dependencies}
            <DependencyList {dependencies}></DependencyList>
            {/await}
        </details>
    </div>
    <a
        class="block p-2 text-center"
        href="#/"
    >{$_('routes.Credits.returnToMainPage')}</a>
</div>