<script>
    import Text from './Text.svelte';
    import Structure from './Sturcture.svelte';

    let songs = JSON.parse(localStorage.getItem('songs') || '[]');
    let activeSong = null;

    $: localStorage.setItem('songs', JSON.stringify(songs));

    function addSong() {
        songs.push({
            title: '',
            structure: [],
        });
        songs = songs;
        activeSong = songs.length - 1;
    }

    function removeSong(song) {
        songs.splice(song, 1);
        songs = songs;
        if (song == activeSong) activeSong = null;
    }
</script>

<style>
    .song-list li.active {
        font-weight: bold;
    }

    @media print {
        header, hr, button {
            display: none;
        }
    }
</style>

<svelte:head>
    <title>Osiolaput</title>
</svelte:head>

<header>
    <h1>Osiolaput</h1>
    <p>Tee osiolappuja tällä työkalulla.</p>

    <ul class="song-list">
        {#each songs as song, index}
            <li class:active={index == activeSong}>
                {songs[index].title || 'Nimetön kappale'}
                <button on:click={() => activeSong = index}>&check; Näytä kappale</button>
                <button on:click={() => removeSong(song)}>- Poista kappale</button>
            </li>
        {/each}
    </ul>
    <button on:click={addSong}>+ Lisää kappale</button>
</header>

<hr>

{#if activeSong !== null}
    <article>
        <h1><Text placeholder="Kappaleen nimi" bind:value={songs[activeSong].title} /></h1>
        <Structure bind:structure={songs[activeSong].structure} />
    </article>
{/if}