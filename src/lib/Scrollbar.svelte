<script lang="ts">
  import { playlist, songLength } from "./store";
  import { onMount } from "svelte";

  let scrollBar: HTMLDivElement;

  onMount(() => {
    scrollBar.addEventListener("scroll", () => {
      $playlist.scrollLeft = scrollBar.scrollLeft;
    });
  });
</script>

<div class="wrapper">
  <div class="scrollbar" bind:this={scrollBar}>
    <div class="scroll" style={"width:" + $songLength * 20 + "px"} />
  </div>
</div>

<style>
  .wrapper {
    max-width: 900px;
    width: 100%;
    display: flex;
    justify-content: flex-end;
  }

  .scrollbar {
    width: 85%;
    overflow: scroll;
    height: 17px;
  }

  .scroll {
    height: 1px;
  }
</style>
