<template>
  <div class="onshare-editer">
    <Notepad />
  </div>
</template>

<script>
import Notepad from "../components/Notepad.vue";

export default {
  name: 'home',
  components: {
    Notepad
  }
}
</script>

<style>
  .onshare-editer{
    width: 100%;
    height: 100%;
  }
</style>
