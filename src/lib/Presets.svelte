<script lant="ts">
  const presets = [
    {
      name: "Für Elise",
      url: "/?beats=eyJicG0iOjYwLCJiZWF0cyI6eyIwIjpbeyJub3RlIjp7ImF1ZGlvIjp7fSwibmFtZSI6IkU1Iiwic2hhcnAiOmZhbHNlfX1dLCIxIjpbeyJub3RlIjp7ImF1ZGlvIjp7fSwibmFtZSI6IkQjNSIsInNoYXJwIjp0cnVlfX1dLCIyIjpbeyJub3RlIjp7ImF1ZGlvIjp7fSwibmFtZSI6IkU1Iiwic2hhcnAiOmZhbHNlfX1dLCIzIjpbeyJub3RlIjp7ImF1ZGlvIjp7fSwibmFtZSI6IkQjNSIsInNoYXJwIjp0cnVlfX1dLCI0IjpbeyJub3RlIjp7ImF1ZGlvIjp7fSwibmFtZSI6IkU1Iiwic2hhcnAiOmZhbHNlfX1dLCI1IjpbeyJub3RlIjp7ImF1ZGlvIjp7fSwibmFtZSI6IkI0Iiwic2hhcnAiOmZhbHNlfX1dLCI2IjpbeyJub3RlIjp7ImF1ZGlvIjp7fSwibmFtZSI6IkQ1Iiwic2hhcnAiOmZhbHNlfX1dLCI3IjpbeyJub3RlIjp7ImF1ZGlvIjp7fSwibmFtZSI6IkM1Iiwic2hhcnAiOmZhbHNlfX1dLCI4IjpbeyJub3RlIjp7ImF1ZGlvIjp7fSwibmFtZSI6IkE0Iiwic2hhcnAiOmZhbHNlfX1dLCI5IjpbXSwiMTAiOltdLCIxMSI6W10sIjEyIjpbeyJub3RlIjp7ImF1ZGlvIjp7fSwibmFtZSI6IkM0Iiwic2hhcnAiOmZhbHNlfX1dLCIxMyI6W3sibm90ZSI6eyJhdWRpbyI6e30sIm5hbWUiOiJFNCIsInNoYXJwIjpmYWxzZX19XSwiMTQiOlt7Im5vdGUiOnsiYXVkaW8iOnt9LCJuYW1lIjoiQTQiLCJzaGFycCI6ZmFsc2V9fV0sIjE1IjpbeyJub3RlIjp7ImF1ZGlvIjp7fSwibmFtZSI6IkI0Iiwic2hhcnAiOmZhbHNlfX1dLCIyMCI6W3sibm90ZSI6eyJhdWRpbyI6e30sIm5hbWUiOiJFNCIsInNoYXJwIjpmYWxzZX19XSwiMjEiOlt7Im5vdGUiOnsiYXVkaW8iOnt9LCJuYW1lIjoiRyM0Iiwic2hhcnAiOnRydWV9fV0sIjIyIjpbeyJub3RlIjp7ImF1ZGlvIjp7fSwibmFtZSI6IkI0Iiwic2hhcnAiOmZhbHNlfX1dLCIyMyI6W3sibm90ZSI6eyJhdWRpbyI6e30sIm5hbWUiOiJDNSIsInNoYXJwIjpmYWxzZX19XSwiMjQiOltdLCIyNSI6W3sibm90ZSI6eyJhdWRpbyI6e30sIm5hbWUiOiJFNCIsInNoYXJwIjpmYWxzZX19XSwiMjYiOltdfSwic29uZ0xlbmd0aCI6Mjd9",
    },
    {
      name: "Adventure Time",
      url: "/?beats=eyJicG0iOjYwLCJiZWF0cyI6eyIwIjpbeyJub3RlIjp7ImF1ZGlvIjp7fSwibmFtZSI6IkYjNCIsInNoYXJwIjp0cnVlfX1dLCIxIjpbeyJub3RlIjp7ImF1ZGlvIjp7fSwibmFtZSI6Ikc0Iiwic2hhcnAiOmZhbHNlfX1dLCIyIjpbeyJub3RlIjp7ImF1ZGlvIjp7fSwibmFtZSI6IkE0Iiwic2hhcnAiOmZhbHNlfX1dLCIzIjpbXSwiNCI6W10sIjUiOltdLCI2IjpbeyJub3RlIjp7ImF1ZGlvIjp7fSwibmFtZSI6IkQ1Iiwic2hhcnAiOmZhbHNlfX1dLCI4IjpbXSwiOSI6W3sibm90ZSI6eyJhdWRpbyI6e30sIm5hbWUiOiJCNCIsInNoYXJwIjpmYWxzZX19XSwiMTIiOltdLCIxMyI6W3sibm90ZSI6eyJhdWRpbyI6e30sIm5hbWUiOiJENSIsInNoYXJwIjpmYWxzZX19XSwiMTQiOlt7Im5vdGUiOnsiYXVkaW8iOnt9LCJuYW1lIjoiRTUiLCJzaGFycCI6ZmFsc2V9fV0sIjE1IjpbeyJub3RlIjp7ImF1ZGlvIjp7fSwibmFtZSI6IkYjNSIsInNoYXJwIjp0cnVlfX1dLCIxNiI6W3sibm90ZSI6eyJhdWRpbyI6e30sIm5hbWUiOiJFNSIsInNoYXJwIjpmYWxzZX19XSwiMTciOltdLCIxOCI6W3sibm90ZSI6eyJhdWRpbyI6e30sIm5hbWUiOiJENSIsInNoYXJwIjpmYWxzZX19XSwiMTkiOltdLCIyMCI6W3sibm90ZSI6eyJhdWRpbyI6e30sIm5hbWUiOiJFNSIsInNoYXJwIjpmYWxzZX19XSwiMjEiOltdLCIyMiI6W3sibm90ZSI6eyJhdWRpbyI6e30sIm5hbWUiOiJCNCIsInNoYXJwIjpmYWxzZX19XSwiMjMiOltdLCIyNCI6W3sibm90ZSI6eyJhdWRpbyI6e30sIm5hbWUiOiJENSIsInNoYXJwIjpmYWxzZX19XSwiMjYiOltdLCIyNyI6W10sIjI4IjpbeyJub3RlIjp7ImF1ZGlvIjp7fSwibmFtZSI6IkI0Iiwic2hhcnAiOmZhbHNlfX1dLCIyOSI6W10sIjMwIjpbeyJub3RlIjp7ImF1ZGlvIjp7fSwibmFtZSI6IkE0Iiwic2hhcnAiOmZhbHNlfX1dLCIzMSI6W3sibm90ZSI6eyJhdWRpbyI6e30sIm5hbWUiOiJENSIsInNoYXJwIjpmYWxzZX19XSwiMzIiOltdLCIzMyI6W3sibm90ZSI6eyJhdWRpbyI6e30sIm5hbWUiOiJENSIsInNoYXJwIjpmYWxzZX19XSwiMzQiOltdLCIzNSI6W3sibm90ZSI6eyJhdWRpbyI6e30sIm5hbWUiOiJGIzQiLCJzaGFycCI6dHJ1ZX19XSwiMzYiOltdLCIzNyI6W3sibm90ZSI6eyJhdWRpbyI6e30sIm5hbWUiOiJFNCIsInNoYXJwIjpmYWxzZX19XSwiMzgiOltdLCIzOSI6W10sIjQwIjpbXX0sInNvbmdMZW5ndGgiOjQxfQ%3D%3D",
    },
    {
      name: "Megalovania",
      url: "/?beats=eyJicG0iOjEzMCwiYmVhdHMiOnsiMCI6W3sibm90ZSI6eyJhdWRpbyI6e30sIm5hbWUiOiJENCIsInNoYXJwIjpmYWxzZX19XSwiMSI6W10sIjIiOlt7Im5vdGUiOnsiYXVkaW8iOnt9LCJuYW1lIjoiRDQiLCJzaGFycCI6ZmFsc2V9fV0sIjMiOltdLCI0IjpbXSwiNSI6W3sibm90ZSI6eyJhdWRpbyI6e30sIm5hbWUiOiJENSIsInNoYXJwIjpmYWxzZX19XSwiNiI6W10sIjciOltdLCI4IjpbeyJub3RlIjp7ImF1ZGlvIjp7fSwibmFtZSI6IkE0Iiwic2hhcnAiOmZhbHNlfX1dLCIxMiI6W3sibm90ZSI6eyJhdWRpbyI6e30sIm5hbWUiOiJHIzQiLCJzaGFycCI6dHJ1ZX19XSwiMTMiOltdLCIxNCI6W10sIjE1IjpbeyJub3RlIjp7ImF1ZGlvIjp7fSwibmFtZSI6Ikc0Iiwic2hhcnAiOmZhbHNlfX1dLCIxNiI6W10sIjE3IjpbXSwiMTgiOlt7Im5vdGUiOnsiYXVkaW8iOnt9LCJuYW1lIjoiRjQiLCJzaGFycCI6ZmFsc2V9fV0sIjE5IjpbXSwiMjAiOltdLCIyMSI6W3sibm90ZSI6eyJhdWRpbyI6e30sIm5hbWUiOiJENCIsInNoYXJwIjpmYWxzZX19XSwiMjIiOltdLCIyMyI6W3sibm90ZSI6eyJhdWRpbyI6e30sIm5hbWUiOiJGNCIsInNoYXJwIjpmYWxzZX19XSwiMjQiOltdLCIyNSI6W3sibm90ZSI6eyJhdWRpbyI6e30sIm5hbWUiOiJHNCIsInNoYXJwIjpmYWxzZX19XSwiMjciOltdfSwic29uZ0xlbmd0aCI6Mjh9",
    },
  ];

  let showPresets = false;
</script>

<div class="parent">
  <div class="presets">
    <button
      on:click|preventDefault={() => {
        showPresets = true;
      }}>Load preset</button
    >
    {#if showPresets}
      <div class="wrapper">
        <div class="presets-overlay">
          <button
            on:click|preventDefault={() => {
              showPresets = false;
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 384 512"
              height="20"
              ><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path
                d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"
              /></svg
            >
          </button>
          {#each presets as preset}
            <a href={preset.url}>
              <div class="preset">
                <p>{preset.name}</p>
              </div>
            </a>
          {/each}
        </div>
      </div>
    {/if}
  </div>
</div>

<style lang="scss">
  @import "../variables.scss";

  .parent {
    width: 100%;
    max-width: 900px;
  }

  .presets {
    display: flex;
    gap: 20px;
  }

  .wrapper {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 999;
    width: 100%;
    height: 100%;
  }

  .presets-overlay {
    padding: 20px;
    overflow: auto;
    height: 100%;
    background-color: RGBA(0, 0, 0, 0.9);
    left: 5vw;
    display: flex;
    flex-direction: column;
    gap: 10px;

    .preset {
      border: 1px solid white;
      padding: 20px;
    }

    p {
      color: white;
      margin: 0;
    }
  }

  a {
    color: black;
    text-decoration: none;
  }

  button {
    all: unset;
    background-color: $lightOrange;
    border: 1px solid black;
    padding: 10px;
    color: black;
    cursor: pointer;
    transition-duration: 0.1s;
    display: grid;
    place-items: center;

    &:hover {
      transform: translate(-5px, -5px);
      box-shadow: 5px 5px black;
    }
  }
</style>
