<script lang="ts">
    import marked from 'marked'

    export let dependency
</script>

<div>
    <div class="flex">
        <div class="break-all flex-initial m-2">
            <div class="font-bold p-4">{dependency.name}</div>
        </div>
        <div class="break-all flex-1 m-2">
            <a
                class="inline-block p-4 underline"
                href={dependency.homepage}
            >{dependency.homepage}</a>
        </div>
        <div class="break-all flex-initial m-2">
            <div class="p-4">{dependency.version}</div>
        </div>
        <div class="break-all flex-initial m-2">
            <div class="p-4">{dependency.license}</div>
        </div>
    </div>
    <div class="m-2">
        <div class="p-4">{@html (() => {
            const parser = new window.DOMParser()
            const description = parser.parseFromString(marked(dependency.description || ''), 'text/html')
            ; [...description.querySelectorAll('a')].forEach(elem => {
                elem.classList.add('underline')
            })
            return description.body.innerHTML
        })()}</div>
    </div>
</div>