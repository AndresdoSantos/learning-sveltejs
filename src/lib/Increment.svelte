<script>
  let count = 0;

  function increment() {
    count += 1;
  }

  $: double = count * 2;
</script>

<button on:click={increment}>
  Clicked {count}
  {count === 1 ? 'time' : 'times'}
  {`Double is ${double}`}
</button>
