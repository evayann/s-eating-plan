<script lang="ts">
    import { onMount } from 'svelte';
    import { personList } from '../../stores/person.store';
    import { tableList } from '../../stores/table.store';

    onMount(() => generatePlan());

    let personAtTable: any;

    function generatePlan() {
        personAtTable = assignPersonsToTables([...$personList], [...$tableList]);
        console.log(personAtTable);
    }

    function assignPersonsToTables(personList: any, tableList: any) {
        // Vérifier que les listes ne sont pas vides
        if (personList.length === 0 || tableList.length === 0) {
            console.log("Listes vides. Impossible d'assigner des personnes aux tables.");
            return;
        }

        // Initialiser la liste des tables avec les personnes assignées
        const tableWithPersonList: any = [];

        // Parcourir chaque table
        tableList.forEach((table: any, index: number) => {
            // Vérifier si la table a des places disponibles
            if (table.numberOfSit > 0) {
                // Assigner des personnes à la table
                const personsAssigned = personList.splice(0, table.numberOfSit);
                tableWithPersonList.push({
                    tableNumber: index + 1, // Table numbers start from 1
                    persons: personsAssigned,
                });
            } else {
                // Si la table n'a pas de places, ajouter une table vide à la liste
                tableWithPersonList.push({
                    tableNumber: index + 1, // Table numbers start from 1
                    persons: [],
                });
            }
        });

        // Afficher le résultat
        console.log('Liste des personnes assignées aux tables :', tableWithPersonList);

        return tableWithPersonList;
    }
</script>

<svelte:head>
    <title>A table !</title>
</svelte:head>

<p>Le plan généré ici :)</p>

{#if personAtTable}
    {#each personAtTable as { tableNumber, persons }}
        <div class="table">
            <p>
                {#if persons.length === 0}
                    Table {tableNumber} : Aucune personne assignée
                {:else}
                    Table {tableNumber} :
                {/if}
            </p>
            <div class="table-content">
                {#each persons as person}
                    <p>{person.name}</p>
                {/each}
            </div>
        </div>
    {/each} 
{/if}

<style>
    .table {
        display: flex;
        flex-direction: column;
        align-items: center;
        border: 5px solid rgb(11, 114, 128);
    }

    .table-content {
        display: flex;
        flex-direction: column;
        height: 20vh;
        width: 100%;
        overflow-y: scroll;
          } 
</style>   