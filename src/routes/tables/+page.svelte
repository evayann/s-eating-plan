<script>
	import { addSitToTable, tableList } from "../../stores/table.store";
	import Table from "./Table.svelte";
</script>

<svelte:head>
    <title> Les Tables </title>
</svelte:head>

<div class="table-list">
	{#each $tableList as table}
		<Table {table} on:increment={() => addSitToTable(table.id)}/>
	{/each}
</div>