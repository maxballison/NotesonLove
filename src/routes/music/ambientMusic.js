import * as Tone from 'tone';

class AmbientMusic {
  constructor({ bpm }) {
    this.bpm = bpm;
    this.setup();
  }
  
  setup() {
    this.setupTransport();
    this.setupInstruments();
    this.setupEffects();
    this.setupConnections();
    this.setupPatterns();
  }

  setupTransport() {
    Tone.Transport.bpm.value = this.bpm;
  }

  setupInstruments() {
    this.drum = new Tone.MembraneSynth().toDestination();
    this.bass = new Tone.MonoSynth().toDestination();
    this.arpeggiator = new Tone.PolySynth(Tone.Synth, {
      oscillator: { type: 'triangle' },
      envelope: { attack: 0.05, decay: 0.1, sustain: 0.3, release: 1 },
    }).toDestination();
  }

  setupEffects() {
    this.gain = new Tone.Gain(2).toDestination();
    this.reverb = new Tone.Reverb(60).toDestination();
    this.delay = new Tone.FeedbackDelay('8n', 0.7).toDestination();
    this.panner = new Tone.AutoPanner(0.1).toDestination();
  }

  setupConnections() {
    this.drum?.connect(this.gain);
    this.bass.connect(this.reverb);
    this.arpeggiator.connect(this.reverb);
    this.arpeggiator.connect(this.delay);
    this.arpeggiator.connect(this.panner);
  }

  setupPatterns() {
    const drumPattern = ['C2', 'C2', 'C2', 'C2'];
    this.drumLoop = new Tone.Sequence(
      (time, note) => {
        this.drum.triggerAttackRelease(note, '8n', time);
      },
      drumPattern,
      '4n'
    );

    const chordProgression = ['C3', 'A#2', 'G#2', 'F2'];
    this.bassLoop = new Tone.Sequence(
      (time, note) => {
        this.bass.triggerAttackRelease(note, '1m', time);
      },
      chordProgression,
      '1m'
    );

    const arpeggioPattern = ['C4', 'E4', 'G4', 'C5', 'G4', 'E4'];
    this.arpeggiatorLoop = new Tone.Sequence(
      (time, note) => {
        this.arpeggiator.triggerAttackRelease(note, '32n', time);
      },
      arpeggioPattern,
      '32n'
    );
  }

  start() {
    Tone.Transport.start();
    this.drumLoop.start(0);
    this.bassLoop.start(0);
    this.arpeggiatorLoop.start(0);
  }
  stop() {
    Tone.Transport.stop();
    this.drumLoop.stop();
    this.bassLoop.stop();
    this.arpeggiatorLoop.stop();
  }

  updateBpm(bpm) {
    this.bpm = bpm;
    Tone.Transport.bpm.value = this.bpm;
  }
}

export default AmbientMusic;
