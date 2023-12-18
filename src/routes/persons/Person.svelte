<script lang="ts">
    import { createEventDispatcher } from 'svelte';
	import TrashIcon from '../../lib/TrashIcon.svelte';
	import type { Person } from '../../stores/person.store';

	export let person: Person;

    const dispatch = createEventDispatcher();
    function nameChanged(newName: string): void {
        dispatch('nameChanged', { newName });
    }

    function trashClicked(personId: string): void {
        dispatch('trashClicked');
    }
</script>

<div class="person">
	<input type="color" />
	<input class="person-name text-secondary text-shadow" on:change={(event) => nameChanged(event.target.value)} value={person.name} />
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
	}
</style>
