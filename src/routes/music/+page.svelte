<script>
    import { onMount } from 'svelte';
    import AmbientMusic from './ambientMusic.js';
    import * as Tone from 'tone';
  
    let bpm = 60;
    let started = false;
    let ambientMusic;
  
    onMount(() => {
      ambientMusic = new AmbientMusic({ bpm });
    });
  
    function startMusic() {
      if (!started) {
        Tone.start();
        ambientMusic.start();
        started = true;
      }
    }
  
    function stopMusic() {
      if (started) {
        ambientMusic.stop();
        started = false;
      }
    }
  
    function updateBpm() {
      ambientMusic.updateBpm(bpm);
    }
  </script>
  
  <style>
    .slider {
      width: 100%;
    }
  </style>
  
  <main>
    <h1>Generative Ambient Music</h1>
    <input
      type="range"
      class="slider"
      min="40"
      max="180"
      bind:value="{bpm}"
      on:input="{updateBpm}"
    />
    <button on:click="{startMusic}" disabled="{started}">Start Music</button>
    <button on:click="{stopMusic}">Stop Music</button>
    <p>BPM: {bpm}</p>
  </main>
  