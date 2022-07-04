<script>
  import Paragraph from './lib/Paragraph.svelte';
  import Image from './lib/Image.svelte';
  import RenderHTML from './lib/RenderHTML.svelte';
  import Increment from './lib/Increment.svelte';
  import Sum from './lib/Sum.svelte';
  import Logic from './lib/Logic.svelte';
  import DomEvents from './lib/events/DOMEvents.svelte';

  let name = 'Andres';
</script>

<h1>Hello {name.toUpperCase()}</h1>

<Image />

<RenderHTML />

<Increment />

<Sum />

<h1>Props in Svelte</h1>

<Paragraph title="My paragraph" />
<!-- Without props -->
<Paragraph />

<h1>Logic in Svelte</h1>

<Logic />

<h1>Events in Svelte</h1>

<DomEvents />
