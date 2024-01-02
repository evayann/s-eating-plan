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
	<button class=" decrement " on:click={decrement}> - </button>
	<div class="table-information text-secondary text-shadow">
		<p class="table-number">Table {table.id}</p>
		<p>{table.numberOfSit} Personnes</p>
	</div>
	<button class="increment " on:click={increment}> + </button>
	<button class="invisible" on:click={() => dispatch('delete')}>
		<TrashIcon />
	</button>
</div>

<style>
	.table-number {
	height: 30px ;
	font-size:x-large;
	
	}
	.increment {
		display: 36px;
		justify-content: flex;
		height: 36px;
		width: 40px;
	}
	.decrement{
		display: flex;
		justify-content: center;
		height: 36px;
		width: 40px;
	}

	.increment {
		display: flex;
		justify-content: center;
	}
	.table {
		display: flex;
		justify-content: space-between;

		border: 1px solid red;
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
