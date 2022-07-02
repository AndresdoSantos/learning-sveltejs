<script>
  let src = 'http://github.com/AndresdoSantos.png';

  let name = 'Andres';
</script>

<!-- In this case, alt without "{name}" causes an error -->
<img {src} alt="{name} image profile" />

<style>
  img {
    width: 200px;
    height: 200px;
  }
</style>
