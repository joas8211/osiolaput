<script>
    import Text from './Text.svelte';

    const palette = ['#B21F35', '#FFA135', '#00753A', '#0052A5', '#681E7E'];
    export let structure = [];

    /**
     * Add new part to the structure.
     */
    function addNewPart() {
        structure.push('');
        structure = structure;
    }

    function removeLastPart() {
        structure.pop();
        structure = structure;
    }

    /**
     * Get color for the part. Choosing from the palette a color that has not
     * been used yet.

     * @param {string} part
     */
    function getColor(part) {
        const uniqueParts = structure.filter(
            (item, index, array) => array.indexOf(item) == index
        );
        const index = uniqueParts.indexOf(part);
        return palette[index] || '#CCCCCC';
    }
</script>

<style>
    .structure {
        display: grid;
        grid-template-columns: 25fr 25fr 25fr 25fr;
        grid-column-gap: 10px;
        grid-row-gap: 10px;
        margin-bottom: 20px;
    }

    .part {
        font-size: 3vw;
        height: 5em;
        background-color: #CCCCCC;
        padding: 10px;
        text-align: center;
        line-height: 5em;
        color: white;
        white-space: nowrap;
        overflow: hidden;
    }

    @media screen and (max-width: 992px) {
        .structure {
            grid-template-columns: 100fr;
        }

        .part {
            font-size: 3em;
        }
    }

    @media print {
        button {
            display: none;
        }
    }
</style>

{#if structure.length > 0}
    <div class="structure">
        {#each structure as part}
            <div class="part" style="background-color: {getColor(part)};">
                <Text bind:value={part} placeholder="#" />
            </div>
        {/each}
    </div>
{/if}

<div>
    <button on:click={addNewPart}>+ Lisää osa</button>
    <button on:click={removeLastPart}>- Poista osa</button>
</div>