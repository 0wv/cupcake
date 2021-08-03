<script lang="ts">
    import DependencyList from '../components/DependencyList.svelte'
    import { color } from '../stores'
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
    >Return to main page</a>
    <div class="mb-auto">
        <h1 class="p-2 text-2xl">Credits</h1>
        <h2 class="p-2 text-xl">Dependencies</h2>
        <details class="p-2">
            <summary>List of dependencies</summary>
            {#await fetchDependencies}
            <p>...waiting</p>
            {:then dependencies}
            <DependencyList {dependencies}></DependencyList>
            {/await}
        </details>
    </div>
    <a
        class="block p-2 text-center"
        href="#/"
    >Return to main page</a>
</div>