<script>
	import RestaurantIcon from '$lib/components/RestaurantIcon.svelte';
import { addSitToTable, addTable, deleteTableById, removeSitToTable, tableList } from '../../stores/table.store';
	import List from '../List.svelte';
	import Table from './Table.svelte';
</script>

<svelte:head>
	<title>Les Tables</title>
</svelte:head>

<List>
    <div slot="title" class="restaurant-list-header text-secondary text-shadow">
        <RestaurantIcon class="restaurant-icon" />
        <h1  class="text-secondary">Liste des tables</h1>
    </div>
    <div slot="list">
        {#each $tableList as table}
        <Table {table} on:addSitToTable={() => addSitToTable(table.id)} on:removeSitToTable={() => removeSitToTable(table.id)} 
            on:deleteTable={()=> deleteTableById(table.id)}/>
    {/each}
    </div>
    <button slot="add" class="font-title" on:click={() => addTable(4)}> Ajouter une table </button> 
</List>

<style>
    .restaurant-list-header {
		display: flex;
        flex-direction: row;
	}

    :global(.restaurant-icon) {
        width: 24px;
        aspect-ratio: 1;

        filter: drop-shadow(var(--shadow));    
    }
</style>