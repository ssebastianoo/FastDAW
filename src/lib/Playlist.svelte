<script lang="ts">
  import notes from "./notes";
  import { songLength, beats, coloredBlocks, playlist } from "./store";

  let scrollBar: HTMLDivElement;

  function setBlock(e: MouseEvent, note: string) {
    const target = e.currentTarget as HTMLDivElement;
    const block = target.dataset.block;
    let color = true;
    if ($beats[block]) {
      const noteIndex = $beats[block].findIndex(
        (_beat) => _beat.note.name === notes[note].name
      );
      if (noteIndex !== -1) {
        $beats[block].splice(noteIndex, 1);
        color = false;
      } else {
        $beats[block].push({
          note: notes[note],
        });
        notes[note].audio.currentTime = 0;
        notes[note].audio.play();
      }
    } else {
      $beats[block] = [
        {
          note: notes[note],
        },
      ];
      notes[note].audio.currentTime = 0;
      notes[note].audio.play();
    }

    if (color) {
      $coloredBlocks.push({
        note: notes[note].name,
        block: parseInt(block),
      });
    } else {
      const blockIndex = $coloredBlocks.findIndex(
        (blockCell) =>
          blockCell.note === notes[note].name &&
          blockCell.block === parseInt(block)
      );
      $coloredBlocks.splice(blockIndex, 1);
    }
    $coloredBlocks = $coloredBlocks;
    $beats = $beats;
  }
</script>

<!-- <div class="scroll-wrap">
  <div
    class="scrollbar-parent"
    bind:this={scrollBar}
    style={"width:" + scrollBarParentWidth}
  >
    <div class="scrollbar" style={"width:" + scrollBarWidth} />
  </div>
</div> -->

<div class="playlist" bind:this={$playlist}>
  <div class="indicator" />
  <div class="lines">
    {#each Object.keys(notes) as note}
      <div class={notes[note].sharp ? "line sharp" : "line"}>
        {#each Array($songLength) as _, index}
          <div
            class={$coloredBlocks.find(
              (block) =>
                block.note === notes[note].name && block.block === index
            )
              ? "block colored"
              : "block"}
            data-block={index}
            on:keypress|preventDefault
            on:click|preventDefault={(e) => {
              setBlock(e, note);
            }}
          />
        {/each}
      </div>
    {/each}
  </div>
</div>

<style lang="scss">
  @import "../variables";

  .playlist {
    width: 85%;
    height: 100%;
    overflow-x: hidden;
    position: relative;
    background-color: $lightOrange;
    border-right: 1px solid black;

    .indicator {
      width: 5px;
      height: 100%;
      background-color: $yellow;
      position: absolute;
      left: var(--indicator-position);
    }

    .line {
      height: 30px;
      display: flex;

      &:last-child {
        .block {
          border-bottom: 1px solid black;
        }
      }
    }

    .block {
      min-width: 20px;
      height: 30px;
      // border-left: 1px solid black;
      border-right: 1px solid black;
      border-top: 1px solid black;
      box-sizing: border-box;

      &:nth-child(4n) {
        border-right: 2px solid black;
      }

      &:last-child {
        border-right: none;
      }
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
</style>
