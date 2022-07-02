<script>
  let count = 0;

  function increment() {
    count += 1;
  }

  // Changing the double conditioner state of variables
  $: double = count * 2;

  // The $ is needed to use count in the condition
  $: if (count >= 10) {
    alert('O valor não é mais permitido!');

    count = 9;
  }
</script>

<button on:click={increment}>
  Clicked {count}
  {count === 1 ? 'time' : 'times'}
  {`Double is ${double}`}
</button>
