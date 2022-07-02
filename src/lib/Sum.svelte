<script>
  let numbers = [1, 2, 3, 4];

  function addNumber() {
    // To use "numbers" in "sum" you need to sign the variable "numbers" with the new value it receives
    numbers = [...numbers, numbers.length + 1];
  }

  $: sum = numbers.reduce((t, n) => t + n, 0);
</script>

<p>{numbers.join(' + ')} = {sum}</p>

<button on:click={addNumber}> Add a number </button>
