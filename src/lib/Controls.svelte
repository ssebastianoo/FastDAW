<script lang="ts">
  import { onMount } from "svelte";
  import { beats, songLength, coloredBlocks } from "./store";
  import notes from "./notes";

  let interval;
  let bpm: number = 60;
  let currentBeat = 0;
  let playing = false;
  let mobileView = false;
  let fakeInput: HTMLInputElement;

  function player() {
    if (playing) {
      if ($beats[currentBeat]) {
        $beats[currentBeat].forEach((beat) => {
          beat.note.audio.currentTime = 0;
          beat.note.audio.play();
        });
      }

      currentBeat++;
      if (currentBeat >= $songLength) {
        currentBeat = 0;
      }
    }

    document.documentElement.style.setProperty(
      "--indicator-position",
      `${currentBeat * 20 - 20}px`
    );
  }

  onMount(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const beatsParam = urlParams.get("beats");

    if (beatsParam) {
      const notesAsArray = Object.entries(notes).map((x) => x[1]);
      const loadedData = JSON.parse(window.atob(beatsParam));

      $beats = loadedData.beats;
      bpm = loadedData.bpm;
      $songLength = loadedData.songLength;

      Object.keys($beats).forEach((beat) => {
        $beats[beat].forEach((note) => {
          note.note.audio = notesAsArray.find(
            (x) => x.name === note.note.name
          ).audio;

          $coloredBlocks = [
            ...$coloredBlocks,
            { note: note.note.name, block: parseInt(beat) },
          ];
        });
      });
    }

    if (window.innerWidth < 454) {
      mobileView = true;
    }
    window.addEventListener("resize", () => {
      if (window.innerWidth < 454) {
        mobileView = true;
      } else {
        mobileView = false;
      }
    });

    interval = setInterval(player, ((60 / bpm) * 1000) / 4);

    document.addEventListener("keydown", (e) => {
      if (e.key === " ") {
        playing = !playing;
      }
    });
  });
</script>

<input type="hidden" bind:this={fakeInput} />

<div class="controls">
  {#if mobileView}
    <div class="sections">
      <div class="section">
        <input
          type="number"
          placeholder="bpm"
          value={bpm}
          on:change|preventDefault={(e) => {
            clearInterval(interval);
            bpm = parseInt(e.currentTarget.value);
            interval = setInterval(player, ((60 / bpm) * 1000) / 4);
          }}
        />
        <input
          type="number"
          placeholder="length"
          value={$songLength}
          on:change|preventDefault={(e) => {
            $songLength = parseInt(e.currentTarget.value);
          }}
        />
      </div>
      <div class="section">
        <button
          on:keypress|preventDefault
          on:click={() => {
            playing = !playing;
          }}
          >{#if !playing}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 384 512"
              height="15"
              ><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path
                d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"
              /></svg
            >
          {:else}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 320 512"
              height="15"
              ><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path
                d="M48 64C21.5 64 0 85.5 0 112V400c0 26.5 21.5 48 48 48H80c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48H48zm192 0c-26.5 0-48 21.5-48 48V400c0 26.5 21.5 48 48 48h32c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48H240z"
              /></svg
            >
          {/if}
        </button>
        <button
          on:keypress|preventDefault
          on:click={() => {
            currentBeat = 0;
          }}
          ><svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            height="15"
            ><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path
              d="M459.5 440.6c9.5 7.9 22.8 9.7 34.1 4.4s18.4-16.6 18.4-29V96c0-12.4-7.2-23.7-18.4-29s-24.5-3.6-34.1 4.4L288 214.3V256v41.7L459.5 440.6zM256 352V256 128 96c0-12.4-7.2-23.7-18.4-29s-24.5-3.6-34.1 4.4l-192 160C4.2 237.5 0 246.5 0 256s4.2 18.5 11.5 24.6l192 160c9.5 7.9 22.8 9.7 34.1 4.4s18.4-16.6 18.4-29V352z"
            /></svg
          ></button
        >
        <button
          on:keypress|preventDefault
          on:click={() => {
            currentBeat = 0;
            $beats = {};
            $coloredBlocks = [];
            playing = false;
          }}
          ><svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
            height="15"
            ><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path
              d="M135.2 17.7C140.6 6.8 151.7 0 163.8 0H284.2c12.1 0 23.2 6.8 28.6 17.7L320 32h96c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 96 0 81.7 0 64S14.3 32 32 32h96l7.2-14.3zM32 128H416V448c0 35.3-28.7 64-64 64H96c-35.3 0-64-28.7-64-64V128zm96 64c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16z"
            /></svg
          ></button
        >
        <button
          on:click|preventDefault={(e) => {
            const exportUrl = new URL(window.location.href);

            const exportData = {
              bpm: bpm,
              beats: $beats,
              songLength: $songLength,
            };

            exportUrl.searchParams.set(
              "beats",
              window.btoa(JSON.stringify(exportData))
            );

            fakeInput.value = exportUrl.href;
            fakeInput.type = "text";
            fakeInput.select();
            fakeInput.setSelectionRange(0, 99999);
            navigator.clipboard.writeText(fakeInput.value);
            fakeInput.type = "hidden";
            alert("Copied URL to clipboard");
          }}
          ><svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 640 512"
            height="15"
            ><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path
              d="M144 480C64.5 480 0 415.5 0 336c0-62.8 40.2-116.2 96.2-135.9c-.1-2.7-.2-5.4-.2-8.1c0-88.4 71.6-160 160-160c59.3 0 111 32.2 138.7 80.2C409.9 102 428.3 96 448 96c53 0 96 43 96 96c0 12.2-2.3 23.8-6.4 34.6C596 238.4 640 290.1 640 352c0 70.7-57.3 128-128 128H144zm79-167l80 80c9.4 9.4 24.6 9.4 33.9 0l80-80c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-39 39V184c0-13.3-10.7-24-24-24s-24 10.7-24 24V318.1l-39-39c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9z"
            /></svg
          ></button
        >
      </div>
    </div>
  {:else}
    <div class="left">
      <button
        on:keypress|preventDefault
        on:click={() => {
          playing = !playing;
        }}
        >{#if !playing}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 384 512"
            height="15"
            ><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path
              d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"
            /></svg
          >
        {:else}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 320 512"
            height="15"
            ><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path
              d="M48 64C21.5 64 0 85.5 0 112V400c0 26.5 21.5 48 48 48H80c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48H48zm192 0c-26.5 0-48 21.5-48 48V400c0 26.5 21.5 48 48 48h32c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48H240z"
            /></svg
          >
        {/if}</button
      >
      <button
        on:keypress|preventDefault
        on:click={() => {
          currentBeat = 0;
        }}
        ><svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          height="15"
          ><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path
            d="M459.5 440.6c9.5 7.9 22.8 9.7 34.1 4.4s18.4-16.6 18.4-29V96c0-12.4-7.2-23.7-18.4-29s-24.5-3.6-34.1 4.4L288 214.3V256v41.7L459.5 440.6zM256 352V256 128 96c0-12.4-7.2-23.7-18.4-29s-24.5-3.6-34.1 4.4l-192 160C4.2 237.5 0 246.5 0 256s4.2 18.5 11.5 24.6l192 160c9.5 7.9 22.8 9.7 34.1 4.4s18.4-16.6 18.4-29V352z"
          /></svg
        ></button
      >
      <button
        on:keypress|preventDefault
        on:click={() => {
          currentBeat = 0;
          $beats = {};
          $coloredBlocks = [];
          playing = false;
        }}
        ><svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"
          height="15"
          ><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path
            d="M135.2 17.7C140.6 6.8 151.7 0 163.8 0H284.2c12.1 0 23.2 6.8 28.6 17.7L320 32h96c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 96 0 81.7 0 64S14.3 32 32 32h96l7.2-14.3zM32 128H416V448c0 35.3-28.7 64-64 64H96c-35.3 0-64-28.7-64-64V128zm96 64c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16z"
          /></svg
        ></button
      >
      <input
        type="number"
        placeholder="bpm"
        value={bpm}
        on:change|preventDefault={(e) => {
          clearInterval(interval);
          bpm = parseInt(e.currentTarget.value);
          interval = setInterval(player, ((60 / bpm) * 1000) / 4);
        }}
      />
      <input
        type="number"
        placeholder="length"
        value={$songLength}
        on:change|preventDefault={(e) => {
          $songLength = parseInt(e.currentTarget.value);
        }}
      />
    </div>
    <div class="right">
      <button
        on:click|preventDefault={(e) => {
          const exportUrl = new URL(window.location.href);

          const exportData = {
            bpm: bpm,
            beats: $beats,
            songLength: $songLength,
          };

          exportUrl.searchParams.set(
            "beats",
            window.btoa(JSON.stringify(exportData))
          );

          fakeInput.value = exportUrl.href;
          fakeInput.type = "text";
          fakeInput.select();
          fakeInput.setSelectionRange(0, 99999);
          navigator.clipboard.writeText(fakeInput.value);
          fakeInput.type = "hidden";
          alert("Copied URL to clipboard");
        }}
        ><svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 640 512"
          height="15"
          ><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path
            d="M144 480C64.5 480 0 415.5 0 336c0-62.8 40.2-116.2 96.2-135.9c-.1-2.7-.2-5.4-.2-8.1c0-88.4 71.6-160 160-160c59.3 0 111 32.2 138.7 80.2C409.9 102 428.3 96 448 96c53 0 96 43 96 96c0 12.2-2.3 23.8-6.4 34.6C596 238.4 640 290.1 640 352c0 70.7-57.3 128-128 128H144zm79-167l80 80c9.4 9.4 24.6 9.4 33.9 0l80-80c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-39 39V184c0-13.3-10.7-24-24-24s-24 10.7-24 24V318.1l-39-39c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9z"
          /></svg
        ></button
      >
    </div>
  {/if}
</div>

<style lang="scss">
  @import "../variables";

  .controls {
    display: flex;
    justify-content: space-between;
    width: 100%;
    max-width: 900px;

    .sections {
      display: flex;
      flex-direction: column;
      gap: 10px;

      .section {
        display: flex;
        gap: 10px;
      }
    }

    .left {
      display: flex;
      gap: 15px;
    }

    input {
      all: unset;
      width: 45px;
      height: 24px;
      background-color: $lightOrange;
      padding: 4px 10px;
      color: black;
      border: 1px solid black;
      transition-duration: 0.1s;
    }

    button {
      all: unset;
      background-color: $lightOrange;
      padding: 4px 10px;
      cursor: pointer;
      color: black;
      border: 1px solid black;
      transition-duration: 0.1s;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 18px;
      height: 24px;
    }

    button:hover {
      box-shadow: 5px 5px black;
      transform: translate(-5px, -5px);
    }
  }
</style>
