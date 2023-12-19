<script lang="ts">
    import { createEventDispatcher } from 'svelte';
    import TrashIcon from '../../lib/components/TrashIcon.svelte';
    import type { Person } from '../../stores/person.store';

	export let person: Person;

    const dispatch = createEventDispatcher();

    function nameChanged(input: HTMLInputElement): void {
        const newName = input.value;
        dispatch('nameChanged', { newName });
    }

    function trashClicked(): void {
        dispatch('trashClicked', person.id);
    }
</script>

<div class="person">
	<input type="color" />
	<input class="person-name text-secondary text-shadow" on:input={(event) => nameChanged(event.currentTarget)} value={person.name} />
	<button class="invisible" on:click={trashClicked} >
		<TrashIcon />
	</button>
</div>

<style>
	.person {
		display: flex;
        align-items: center;
		justify-content: space-between;
	}

	.person-name {
		text-align: center;
		min-width: 250px;

        border: none;
	}

    .person-name:focus-visible {
        outline: none;
    }
</style>
