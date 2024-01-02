<script lang="ts">
    import { personList, deletePersonById, changePersonName, addPerson } from '../../stores/person.store';
	import PersonIcon from '../../lib/components/PersonIcon.svelte';
	import Person from './Person.svelte';
	import List from '../List.svelte';
</script>

<svelte:head>
    <title> Les Personnes </title>
</svelte:head>

<List>
    <div slot="title" class="person-list-header text-secondary text-shadow">
        <PersonIcon class="person-icon"/>
        <h1>Liste des convives</h1>
    </div>
    <div slot="list">
        {#each $personList as person}
            <Person {person} on:nameChanged={(event) => changePersonName(person.id, event.detail.newName)} on:trashClicked={() => deletePersonById(person.id)}></Person>
        {/each}
    </div>
    <button slot="add" class="font-title" on:click={() => addPerson()}> Ajouter un convive </button>
</List>


<style>	
    .person-list-header {
		display: flex;
        flex-direction: row;
	}

    :global(.person-icon) {
        width: 24px;
        aspect-ratio: 1;

        filter: drop-shadow(var(--shadow));    
    }
</style>
