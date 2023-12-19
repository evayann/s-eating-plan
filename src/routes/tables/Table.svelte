<script lang="ts">
    import { createEventDispatcher } from 'svelte';
	import TrashIcon from '../../lib/components/TrashIcon.svelte';
	import type { Table } from '../../stores/table.store';

	export let table: Table;

    const dispatch = createEventDispatcher();
    
    function decrement() {
        dispatch('decrement')
    }

    function increment() {
        dispatch('increment')
    }
</script>

<div class="table">
	<button on:click={decrement}> - </button>
	<div class="table-information text-secondary text-shadow">
		<p>Table {table.id}</p>
		<p>{table.numberOfSit} Personnes</p>
	</div>
	<button on:click={increment}> + </button>
	<button class="invisible">
		<TrashIcon />
	</button>
</div>

<style>
	.table {
		display: flex;
		justify-content: space-between;
	}

	.table-information {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;

		min-width: 250px;
	}
</style>
