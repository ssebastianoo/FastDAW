<script lang="ts">
  import { onMount } from "svelte";
  import { beats, songLength, coloredBlocks } from "./store";

  let bpm: number = 60;
  let interval;
  let currentBeat = 0;
  let playing = false;

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
    //

    document.documentElement.style.setProperty(
      "--indicator-position",
      `${currentBeat * 20 - 20}px`
    );
  }

  onMount(() => {
    interval = setInterval(player, ((60 / bpm) * 1000) / 4);

    document.addEventListener("keydown", (e) => {
      if (e.key === " ") {
        playing = !playing;
      }
    });
  });
</script>

<div class="controls">
  <div class="left">
    <button
      on:keypress|preventDefault
      on:click={() => {
        playing = !playing;
      }}>{playing ? "stop" : "play"}</button
    >
    <button
      on:keypress|preventDefault
      on:click={() => {
        currentBeat = 0;
      }}>restart</button
    >
    <button
      on:keypress|preventDefault
      on:click={() => {
        currentBeat = 0;
        $beats = {};
        $coloredBlocks = [];
        playing = false;
      }}>reset</button
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
</div>

<style lang="scss">
  @import "../variables";

  .controls {
    display: flex;
    justify-content: space-between;
    width: 100%;
    max-width: 900px;

    .left {
      display: flex;
      gap: 15px;

      input {
        all: unset;
        width: 45px;
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
      }

      button:hover {
        box-shadow: 5px 5px black;
        transform: translate(-5px, -5px);
      }
    }
  }
</style>