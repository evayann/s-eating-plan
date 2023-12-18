<script lang="ts">
	import { personList, deletePersonById, changePersonName } from '../../stores/person.store';
	import Person from './Person.svelte';
</script>

<svelte:head>
    <title> Les Personnes </title>
</svelte:head>

<div class="person-list-header text-secondary text-shadow">
	<svg
		class="person-list-header-icon"
		xmlns="http://www.w3.org/2000/svg"
		fill="currentColor"
		viewBox="0 0 16 16"
	>
		<path
			d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664z"
		/>
	</svg>
	<p>Liste des convives</p>
</div>

<div class="person-list">
	{#each $personList as person}
		<Person {person} on:trashClicked={() => deletePersonById(person.id)} on:nameChanged={(event) => changePersonName(person.id, event.detail.newName)}/>
	{/each}
</div>

<style>
	.person-list-header {
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.person-list-header-icon {
        width: 24px;
        aspect-ratio: 1;

        filter: drop-shadow(var(--shadow));
	}

	.person-list {
		display: flex;
		flex-direction: column;
		gap: var(--gap-3);
	}
</style>
