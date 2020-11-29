<script>
    import Text from './Text.svelte';

    const palette = ['#B21F35', '#FFA135', '#00753A', '#0052A5', '#681E7E'];
    export let structure = [];

    /**
     * Add new part to the structure.
     */
    function addNewPart() {
        structure.push({});
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
        const partNames = structure.map(part => part.name);
        const uniquePartNames = partNames.filter(
            (value, index, array) => array.indexOf(value) == index
        );
        const index = uniquePartNames.indexOf(part.name);
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
        height: 20vw;
        background-color: #CCCCCC;
        padding: 10px;
        color: white;
        text-align: center;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    .part .name {
        font-size: 3vw;
        white-space: nowrap;
        overflow: hidden;
        margin-bottom: 1em;
    }

    .part .info {
        font-size: 1.75vw;
    }

    @media screen and (max-width: 992px) {
        .structure {
            grid-template-columns: 100fr;
        }

        .part .name {
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
                <div class="name"><Text bind:value={part.name} placeholder="#" /></div>
                <div class="info"><Text bind:value={part.info} multiline={true} placeholder="1x" /></div>
            </div>
        {/each}
    </div>
{/if}

<div>
    <button on:click={addNewPart}>+ Lisää osa</button>
    <button on:click={removeLastPart}>- Poista osa</button>
</div>