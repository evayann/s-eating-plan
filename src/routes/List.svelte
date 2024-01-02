
<div class="list-container">
    <slot name="title"></slot>
    <slot name="list"></slot>
</div>
<slot name="add"></slot>
<a href="/plan" class="font-title"> Générer le plan </a>

<style>
    .list-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: var(--gap-2);
    }

    :global(.list-container > div) {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: var(--gap-4);
    }

    :global(.list-container + *) {
        margin: var(--gap-4) 0;
    }
</style>