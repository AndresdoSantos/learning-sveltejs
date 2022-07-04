<script>
  function handleClick() {
    alert('no more alerts');
  }
</script>

<!-- "once" faz execultar uma única vez -->
<button on:click|once={handleClick}> Click me </button>
