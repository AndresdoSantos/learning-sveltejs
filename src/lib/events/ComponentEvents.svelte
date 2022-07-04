<script lang="ts">
  import { createEventDispatcher } from 'svelte';

  const dispatch = createEventDispatcher();

  function sayHello() {
    // "text" must be placed in the component property
    dispatch('text', {
      text: 'Hello',
    });
  }
</script>

<button on:click={sayHello}> Click to say hello </button>
