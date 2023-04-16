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
    <p>
      <a href="https://github.com/ssebastianoo/FastDAW" target="_blank">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 496 512"
          height="35"
          fill="white"
          ><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path
            d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"
          /></svg
        ></a
      >
    </p>
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
    <p>
      made by <a href="https://sebastianogirotto.me" target="_blank">seb</a>
    </p>
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
    display: flex;
    align-items: center;
    justify-content: space-between;

    a {
      color: unset;
      text-decoration: none;

      svg {
        transition-duration: 0.3s;
      }

      &:hover {
        svg {
          fill: rgb(138, 134, 134);
        }
      }
    }

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

    a {
      color: $yellow;
      text-decoration: none;

      &:hover {
        text-decoration: underline;
      }
    }
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
