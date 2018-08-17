<template>
  <div class="onshare-notepad">
    <div class="onshare-notepad-title">
      <h4>Chrome插件分享</h4>
    </div>
    <div class="onshare-notepad-body" contenteditable></div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
  .onshare-notepad{
    width: 100%;
    height: 100%;
  }

  .onshare-notepad-title{
    width: 100%;
    height: 30px;
    text-align: center;
    background: url('http://memonotepad.com/img/paperfibers.png');
    background-size: auto;
    padding: 14px;
  }

  .onshare-notepad-title h4{
    margin: 0px;
  }

  .onshare-notepad-body{
    width: 100%;
    height: calc(100% - 40px);
    background-color: #fff;
    background-image: linear-gradient(rgba(53,85,131,0.1) 0%, rgba(255,255,255,0.2) 8%), url(http://memonotepad.com/img/paperfibers.png);
    background-position: 0 -3px, 0 0;
    background-size: 100% 25px, 10% 10%;  
    font: 24px;
    line-height: 25px;
    outline: none;
    text-indent: 2em;
  }
</style>
