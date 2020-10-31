<script>
    import { onMount, afterUpdate } from 'svelte';
    export let value = '';
    export let placeholder = 'Start writing';
    export let multiline = false;
    let inputElement;
    let sizeTestElement;
    function onKeyDown(event) {
        if (event.key == 'Enter' && !multiline) {
            event.preventDefault();
        }
    }
    function resize() {
        sizeTestElement.style.display = 'inline';
        sizeTestElement.innerText = value || placeholder;
        inputElement.style.width = (sizeTestElement.offsetWidth + 1) + 'px';
        sizeTestElement.style.display = 'none';
        inputElement.style.height = '';
        inputElement.style.height = inputElement.scrollHeight + 'px';
    }
    onMount(() => resize());
    afterUpdate(() => resize());
</script>

<style>
    textarea {
        display: inline;
        resize: none;
        overflow: hidden;
        writing-mode: unset;
        text-rendering: unset;
        color: unset;
        letter-spacing: unset;
        word-spacing: unset;
        text-transform: unset;
        text-indent: unset;
        text-shadow: unset;;
        text-align: unset;
        background: unset;
        cursor: unset;
        margin: unset;
        font: unset;
        padding: unset;
        border: unset;
        flex-direction: unset;
        overflow-wrap: unset;
    }
    
    span {
        display: none;
    }
</style>

<svelte:window on:resize={resize} />

<span bind:this={sizeTestElement}></span>
<textarea
    type="text"
    bind:this={inputElement}
    bind:value
    placeholder={placeholder}
    on:keydown={onKeyDown}
    rows="1"></textarea>