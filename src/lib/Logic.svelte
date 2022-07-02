<script lang="ts">
  let user: boolean = true;

  function toggle() {
    user = !user;
  }

  let cats = [
    { id: 'Cat 1', name: 'Cat 1' },
    { id: 'Cat 2', name: 'Cat 2' },
    { id: 'Cat 3', name: 'Cat 3' },
  ];
</script>

{#if user}
  <p>You is logged</p>
{:else}
  <p>You is not logged</p>
{/if}

<button on:click={toggle}>Toggle</button>

<ul>
  {#each cats as { id, name } (id)}
    <li>{name}</li>
  {/each}
</ul>

<!-- Await logic
  {#await promise then value}
	  <p>the value is {value}</p>
  {/await}
-->
