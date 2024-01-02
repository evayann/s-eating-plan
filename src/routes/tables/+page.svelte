<script>
	import { addSitToTable, addTable, deleteTableById, removeSitToTable, tableList } from '../../stores/table.store';
	import Table from './Table.svelte';
</script>

<svelte:head>
	<title>Les Tables</title>
	<title>Liste</title>
</svelte:head>

<div class="table-list">
	<h1 class="table-list-title">Liste des tables</h1>
	{#each $tableList as table}
		<Table {table} on:increment={() => addSitToTable(table.id)} on:decrement={() => removeSitToTable(table.id)} 
			on:delete={()=> deleteTableById(table.id)}/>
	{/each}
</div>
<button class="font-title" on:click={() => addTable(4)}> Ajouter une table  </button> 
<a href="/plan" class="font-title"> Générer le plan </a>



<style>
	.table-list-title {
		color: rgb(22, 95, 100);
	}
</style>
