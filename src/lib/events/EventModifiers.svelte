<script>
  function handleClick() {
    alert('Event modifiers');
  }
</script>

<!-- "once" faz execultar uma única vez -->
<button on:click|once={handleClick}> Click me </button>
