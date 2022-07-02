<script>
  import Paragraph from './lib/Paragraph.svelte';
  import Image from './lib/Image.svelte';
  import RenderHTML from './lib/RenderHTML.svelte';
  import Increment from './lib/Increment.svelte';

  let name = 'Andres';
</script>

<h1>Hello {name.toUpperCase()}</h1>

<Image />

<Paragraph />

<RenderHTML />

<Increment />
