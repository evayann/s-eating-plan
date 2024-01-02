<script lang="ts">
    import { createEventDispatcher } from 'svelte';
	import TrashIcon from '../../lib/components/TrashIcon.svelte';
	import type { Table } from '../../stores/table.store';

	export let table: Table;

    const dispatch = createEventDispatcher();
    
    function removeSitToTable() {
        dispatch('removeSitToTable');
    }

    function addSitToTable() {
        dispatch('addSitToTable');
    }

    function deleteTable(): void {
        dispatch('deleteTable');
    }
</script>

<div class="table">
	<button on:click={removeSitToTable}> - </button>

	<div class="table-information text-secondary text-shadow">
		<p class="table-number">Table {table.id}</p>
		<p>{table.numberOfSit} Personnes</p>
	</div>

	<button on:click={addSitToTable}> + </button>

	<button class="invisible" on:click={deleteTable}>
		<TrashIcon />
	</button>
</div>

<style>
	.table-number {
        height: 30px ;
        font-size: x-large; 
	}

    button:not(.invisible) {
        display: flex;
        justify-content: center;

        width: 40px;
        aspect-ratio: 1;
    }

	.table {
		display: flex;
		justify-content: space-between;
        align-items: center;
	}

	.table-information {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;

		min-width: 250px;
	}

	p {
		margin: 0;
	}
</style>
