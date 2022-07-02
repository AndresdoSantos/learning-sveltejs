<script lang="ts">
  // To access props -> console.log($$props);

  export let title: string | undefined = undefined;
</script>

<strong>{title}</strong>

<!-- This CSS is scoped -->
<style>
  strong {
    color: #00acee;
  }
</style>
