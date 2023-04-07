<script lang="ts">
  import notes from "./notes";
</script>

<div class="keys">
  {#each Object.keys(notes) as note}
    <div
      class={notes[note].sharp ? "key sharp" : "key"}
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

<style lang="scss">
  .keys {
    display: flex;
    flex-direction: column;
    width: 15%;
    height: 100%;

    .key {
      background-color: white;
      border-top: 1px solid black;
      border-left: 1px solid black;
      border-right: 1px solid black;
      box-sizing: border-box;
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
        width: 30px;
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
