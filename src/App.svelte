<script lang="ts">
  import Keys from "./lib/Keys.svelte";
  import Playlist from "./lib/Playlist.svelte";
  import Controls from "./lib/Controls.svelte";
  import Scrollbar from "./lib/Scrollbar.svelte";
  import Presets from "./lib/Presets.svelte";

  import { onMount } from "svelte";

  onMount(() => {
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker
        .register("/sw.js", {
          scope: "/",
        })
        .then((registration) => {
          registration.update();
        });
    }
  });
</script>

<main>
  <header>
    <h1>Fast DAW</h1>
  </header>

  <div class="container">
    <Presets />
    <Controls />
    <div class="workspace-wrapper">
      <Scrollbar />
      <div class="workspace">
        <Keys />
        <Playlist />
      </div>
    </div>
  </div>
  <footer>
    <p>made by seb</p>
  </footer>
</main>

<style lang="scss">
  @import "variables";

  main {
    padding: 40px;
    min-height: calc(100vh - 80px);
  }

  header {
    height: $headerHeight;

    h1 {
      margin: 0;
    }
  }

  .container {
    min-height: calc(100vh - 80px - $headerHeight * 2);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 20px;
  }

  .workspace-wrapper {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }

  .workspace {
    display: flex;
    width: 100%;
    max-width: 900px;
    max-height: 400px;
    overflow-y: auto;

    &::--webkit-scrollbar {
      background-color: red;
    }
  }

  footer {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 36px;
  }
</style>
