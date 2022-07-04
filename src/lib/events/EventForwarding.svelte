<script>
  import { createEventDispatcher } from 'svelte';
  import EventModifiers from './EventModifiers.svelte';

  const dispatch = createEventDispatcher();

  // Event forwarding works for DOM events too.
  function forward(event) {
    dispatch('message', event.detail);
  }
</script>

<EventModifiers on:text={forward} />
