import wavC4 from "../assets/notes/C4.wav";
import wavCSharp4 from "../assets/notes/CSharp4.wav";
import wavD4 from "../assets/notes/D4.wav";
import wavDSharp4 from "../assets/notes/DSharp4.wav";
import wavE4 from "../assets/notes/E4.wav";
import wavF4 from "../assets/notes/F4.wav";
import wavFSharp4 from "../assets/notes/FSharp4.wav";
import wavG4 from "../assets/notes/G4.wav";
import wavGSharp4 from "../assets/notes/GSharp4.wav";
import wavA4 from "../assets/notes/A4.wav";
import wavASharp4 from "../assets/notes/ASharp4.wav";
import wavB4 from "../assets/notes/B4.wav";

import wavC3 from "../assets/notes/C3.wav";
import wavCSharp3 from "../assets/notes/CSharp3.wav";
import wavD3 from "../assets/notes/D3.wav";
import wavDSharp3 from "../assets/notes/DSharp3.wav";
import wavE3 from "../assets/notes/E3.wav";
import wavF3 from "../assets/notes/F3.wav";
import wavFSharp3 from "../assets/notes/FSharp3.wav";
import wavG3 from "../assets/notes/G3.wav";
import wavGSharp3 from "../assets/notes/GSharp3.wav";
import wavA3 from "../assets/notes/A3.wav";
import wavASharp3 from "../assets/notes/ASharp3.wav";
import wavB3 from "../assets/notes/B3.wav";

export type Note = {
  audio: HTMLAudioElement;
  name: string;
  sharp: boolean;
};

export default <{ [key: string]: Note }>{
  noteB4: {
    audio: new Audio(wavB4),
    name: "B4",
    sharp: false,
  },
  noteASharp4: {
    audio: new Audio(wavASharp4),
    name: "A#4",
    sharp: true,
  },
  noteA4: {
    audio: new Audio(wavA4),
    name: "A4",
    sharp: false,
  },
  noteGSharp4: {
    audio: new Audio(wavGSharp4),
    name: "G#4",
    sharp: true,
  },
  noteG4: {
    audio: new Audio(wavG4),
    name: "G4",
    sharp: false,
  },
  noteFSharp4: {
    audio: new Audio(wavFSharp4),
    name: "F#4",
    sharp: true,
  },
  noteF4: {
    audio: new Audio(wavF4),
    name: "F4",
    sharp: false,
  },
  noteE4: {
    audio: new Audio(wavE4),
    name: "E4",
    sharp: false,
  },
  noteDSharp4: {
    audio: new Audio(wavDSharp4),
    name: "D#4",
    sharp: true,
  },
  noteD4: {
    audio: new Audio(wavD4),
    name: "D4",
    sharp: false,
  },
  noteCSharp4: {
    audio: new Audio(wavCSharp4),
    name: "C#4",
    sharp: true,
  },
  noteC4: {
    audio: new Audio(wavC4),
    name: "C4",
    sharp: false,
  },
  noteB3: {
    audio: new Audio(wavB3),
    name: "B3",
    sharp: false,
  },
  noteASharp3: {
    audio: new Audio(wavASharp3),
    name: "A#3",
    sharp: true,
  },
  noteA3: {
    audio: new Audio(wavA3),
    name: "A3",
    sharp: false,
  },
  noteGSharp3: {
    audio: new Audio(wavGSharp3),
    name: "G#3",
    sharp: true,
  },
  noteG3: {
    audio: new Audio(wavG3),
    name: "G3",
    sharp: false,
  },
  noteFSharp3: {
    audio: new Audio(wavFSharp3),
    name: "F#3",
    sharp: true,
  },
  noteF3: {
    audio: new Audio(wavF3),
    name: "F3",
    sharp: false,
  },
  noteE3: {
    audio: new Audio(wavE3),
    name: "E3",
    sharp: false,
  },
  noteDSharp3: {
    audio: new Audio(wavDSharp3),
    name: "D#3",
    sharp: true,
  },
  noteD3: {
    audio: new Audio(wavD3),
    name: "D3",
    sharp: false,
  },
  noteCSharp3: {
    audio: new Audio(wavCSharp3),
    name: "C#3",
    sharp: true,
  },
  noteC3: {
    audio: new Audio(wavC3),
    name: "C3",
    sharp: false,
  },
};
