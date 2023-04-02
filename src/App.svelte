<script lang="ts">
  import { onMount } from "svelte";
  import notes from "./lib/notes";

  let bpm: number = 60;
  let interval;
  let currentBeat = 0;
  let songLength = 100;
  let playing = false;

  let beats = {};

  let coloredBlocks = [];

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
  });
</script>

<main>
  <h1>direct piano</h1>

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
  <br />
  <label for="bpm">bpm</label>
  <input
    id="bpm"
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
  <br />
  <label for="length">length</label>
  <input
    id="length"
    type="number"
    placeholder="length"
    value={songLength}
    on:change|preventDefault={(e) => {
      // @ts-ignore
      songLength = parseInt(e.target.value);
    }}
  />
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
                  block.note === notes[note].name &&
                  block.block === index.toString()
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
                    block: block,
                  });
                } else {
                  const blockIndex = coloredBlocks.findIndex(
                    (block) => block.note === notes[note].name
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
</main>

<style lang="scss">
  .workspace {
    display: flex;
  }

  .playlist {
    width: 100%;
    overflow: auto;
    position: relative;

    .indicator {
      width: 5px;
      height: 100%;
      background-color: yellow;
      position: absolute;
      left: var(--indicator-position);
    }

    .line {
      height: 30px;
      border-top: 1px solid black;
      border-right: 1px solid black;
      display: flex;

      &:last-child {
        border-bottom: 1px solid black;
      }
    }

    .block {
      min-width: 20px;
      height: 30px;
      // border-left: 1px solid black;
      // border-right: 1px solid black;
      outline: 1px solid black;
    }

    .colored {
      background-color: rgb(233, 180, 81);
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

    .note {
      background-color: white;
      border-top: 1px solid black;
      width: 120px;
      height: 30px;
      display: flex;
      justify-content: end;
      align-items: center;
      cursor: pointer;

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
</style>
