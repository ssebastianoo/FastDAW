<script lang="ts">
  import { onMount } from "svelte";
  import notes from "./lib/notes";
  import type { Note } from "./lib/notes";

  let bpm: number = 60;
  let interval;
  let currentBeat = 0;
  let songLength = 100;
  let playing = false;

  type Beats = {
    [key: string]: {
      note: Note;
    }[];
  };

  let beats: Beats = {};

  let coloredBlocks: {
    note: string;
    block: number;
  }[] = [];

  function player() {
    if (playing) {
      if (beats[currentBeat]) {
        beats[currentBeat].forEach((beat) => {
          beat.note.audio.currentTime = 0;
          beat.note.audio.play();
        });
      }

      currentBeat++;
      if (currentBeat >= songLength) {
        currentBeat = 0;
      }
    }

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

<main>
  <header>
    <h1>Fast DAW</h1>
  </header>

  <div class="container">
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
            beats = {};
            coloredBlocks = [];
            playing = false;
          }}>reset</button
        >
        <input
          type="number"
          placeholder="bpm"
          value={bpm}
          on:change|preventDefault={(e) => {
            clearInterval(interval);
            // @ts-ignore
            bpm = parseInt(e.target.value);
            interval = setInterval(player, ((60 / bpm) * 1000) / 4);
          }}
        />
        <input
          type="number"
          placeholder="length"
          value={songLength}
          on:change|preventDefault={(e) => {
            // @ts-ignore
            songLength = parseInt(e.target.value);
          }}
        />
      </div>
    </div>
    <div class="workspace">
      <div class="notes">
        {#each Object.keys(notes) as note}
          <div
            class={notes[note].sharp ? "note sharp" : "note"}
            on:keypress|preventDefault
            on:click={() => {
              notes[note].audio.currentTime = 0;
              notes[note].audio.play();
            }}
          >
            <p>{notes[note].name}</p>
          </div>
        {/each}
      </div>
      <div class="playlist">
        <div class="indicator" />
        {#each Object.keys(notes) as note}
          <div class={notes[note].sharp ? "line sharp" : "line"}>
            {#each Array(songLength) as _, index}
              <div
                class={coloredBlocks.find(
                  (block) =>
                    block.note === notes[note].name && block.block === index
                )
                  ? "block colored"
                  : "block"}
                data-block={index}
                on:keypress|preventDefault
                on:click|preventDefault={(e) => {
                  // @ts-ignore
                  const block = e.target.dataset.block;
                  let color = true;
                  if (beats[block]) {
                    const noteIndex = beats[block].findIndex(
                      (beat) => beat.note.name === notes[note].name
                    );
                    if (noteIndex !== -1) {
                      beats[block].splice(noteIndex, 1);
                      color = false;
                    } else {
                      beats[block].push({
                        note: notes[note],
                      });
                    }
                  } else {
                    beats[block] = [
                      {
                        note: notes[note],
                      },
                    ];
                  }

                  if (color) {
                    coloredBlocks.push({
                      note: notes[note].name,
                      block: parseInt(block),
                    });
                  } else {
                    const blockIndex = coloredBlocks.findIndex(
                      (blockCell) =>
                        blockCell.note === notes[note].name &&
                        blockCell.block === parseInt(block)
                    );
                    coloredBlocks.splice(blockIndex, 1);
                  }
                  coloredBlocks = coloredBlocks;
                  beats = beats;
                }}
              />
            {/each}
          </div>
        {/each}
      </div>
    </div>
  </div>
  <footer>
    <p>made by seb</p>
  </footer>
</main>

<style lang="scss">
  $borderColor: black;
  $lightOrange: #fdc49b;
  $orange: rgb(233, 180, 81);
  $headerHeight: 36px;
  $yellow: #fff59f;

  main {
    padding: 40px;
    min-height: calc(100vh - 80px);
  }

  header {
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
    gap: 10px;
  }

  .workspace {
    display: flex;
    width: 100%;
    max-width: 900px;
  }

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

  .playlist {
    width: 85%;
    overflow: auto;
    position: relative;
    background-color: $lightOrange;

    .indicator {
      width: 5px;
      height: 100%;
      background-color: $yellow;
      position: absolute;
      left: var(--indicator-position);
    }

    .line {
      height: 30px;
      border-top: 1px solid $borderColor;
      border-right: 1px solid $borderColor;
      display: flex;

      &:last-child {
        border-bottom: 1px solid $borderColor;
      }
    }

    .block {
      min-width: 20px;
      height: 30px;
      // border-left: 1px solid black;
      // border-right: 1px solid black;
      outline: 1px solid $borderColor;
    }

    .colored {
      background-color: $orange;
    }

    .sharp {
      height: 20px;

      .block {
        height: 20px;
      }
    }
  }

  .notes {
    display: flex;
    flex-direction: column;
    width: 15%;

    .note {
      background-color: white;
      border-top: 1px solid black;
      width: 100%;
      height: 30px;
      display: flex;
      justify-content: end;
      align-items: center;
      cursor: pointer;

      &:active {
        transform: translate(5px 5px);
      }

      p {
        pointer-events: none;
        user-select: none;
        margin: 0 10px 0 0;
        width: 20px;
        color: black;
      }

      &:active {
        opacity: 0.8;
      }

      &:last-child {
        border-bottom: 1px solid black;
      }
    }

    .sharp {
      height: 20px;
      background-color: black;
      p {
        color: white;
      }
    }
  }

  footer {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 36px;
  }
</style>
