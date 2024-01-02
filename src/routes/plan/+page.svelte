<script lang="ts">
	import { onMount } from 'svelte';
	import { personList, type Person } from '../../stores/person.store';
	import { tableList, type Table } from '../../stores/table.store';
	import List from '../List.svelte';

	onMount(() => generatePlan());

	type TablePlan = { tableId: number; personList: Person[] };
	let planForTableList: TablePlan[] = [];

	function generatePlan() {
		planForTableList = assignPersonsToTables(Array.from($personList), Array.from($tableList));
	}

	function assignPersonsToTables(personList: Person[], tableList: Table[]): TablePlan[] {
		const randomizePersonList = personList.sort(() => 0.5 - Math.random());
		return tableList.map((table) => ({
			tableId: table.id,
			personList: randomizePersonList.splice(0, table.numberOfSit)
		}));
	}
</script>

<svelte:head>
	<title>A table !</title>
</svelte:head>

{#if planForTableList.length !== 0}
	<div class="plan">
		{#each planForTableList as { tableId, personList }}
			<div class="table">
				<p class="table-title text-secondary">
					Table {tableId}
				</p>
				{#if personList.length !== 0}
					<div class="table-content">
						{#each personList as person}
							<p>{person.name}</p>
						{/each}
					</div>
				{:else}
					Aucune personne a cette table
				{/if}
			</div>
		{/each}
	</div>
{:else}
	<p>Il manque des informations pour générer le plan</p>
{/if}

<style>
	.plan {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: var(--gap-2);

		width: 100%;
	}

	.table {
		display: flex;
		flex-direction: column;
		align-items: center;

		border: 1px solid var(--secondary);
		border-radius: 15px;

		width: 100%;
	}

	.table-title {
		font-size: var(--fs-3);
	}
</style>
