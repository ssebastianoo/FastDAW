<script lang="ts">
  import Keys from "./lib/Keys.svelte";
  import Playlist from "./lib/Playlist.svelte";
  import Controls from "./lib/Controls.svelte";
  import Scrollbar from "./lib/Scrollbar.svelte";
  import Presets from "./lib/Presets.svelte";

  import { onMount } from "svelte";
  import { isMobile } from "./lib/store";

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

    if (
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      )
    ) {
      $isMobile = true;
    }

    document.documentElement.style.setProperty(
      "--fh",
      `${window.innerHeight}px`
    );

    window.addEventListener("resize", () => {
      document.documentElement.style.setProperty(
        "--fh",
        `${window.innerHeight}px`
      );
    });
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
      {#if !$isMobile}
        <Scrollbar />
      {/if}
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
    min-height: calc(var(--fh) - 80px);
  }

  header {
    height: $headerHeight;

    h1 {
      margin: 0;
    }
  }

  .container {
    min-height: calc(var(--fh) - 80px - $headerHeight * 2);
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
    overflow-y: auto;
    width: 100%;
    max-width: 900px;
    max-height: 400px;

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

  @media (max-width: 454px) {
    main {
      padding: 20px;
      min-height: calc(var(--fh) - 40px);
    }

    .container {
      gap: 10px;
      min-height: calc(var(--fh) - 40px - $headerHeight * 2);
    }
  }

  @media (min-height: 700px) {
    .workspace {
      max-height: 490px;
    }
  }

  @media (min-height: 900px) {
    .workspace {
      max-height: 620px;
    }
  }
</style>
