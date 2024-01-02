<script lang="ts">
    import { personList, deletePersonById, changePersonName, addPerson } from '../../stores/person.store';
	import PersonIcon from '../../lib/components/PersonIcon.svelte';
	import Person from './Person.svelte';
</script>

<svelte:head>
    <title> Les Personnes </title>
</svelte:head>

<div class="person-list-header text-secondary text-shadow">
    <PersonIcon class="person-icon"/>
	<p>Liste des convives</p>
</div>

<div class="person-list">
	{#each $personList as person}
		<Person {person} on:nameChanged={(event) => changePersonName(person.id, event.detail.newName)} on:trashClicked={() => deletePersonById(person.id)}></Person>
	{/each}
</div>

<button class="font-title" on:click={() => addPerson('Nouvelle personne')}> Ajouter un convive </button>
<a href="/plan" class="font-title"> Générer le plan </a>

<style>
	.person-list-header {
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.person-list { 
		display: flex;
		flex-direction: column;
		gap: var(--gap-3);
	}

    :global(.person-icon) {
        width: 24px;
        aspect-ratio: 1;

        filter: drop-shadow(var(--shadow));    
    }
</style>
