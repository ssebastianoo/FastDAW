export type Note = {
  audio: HTMLAudioElement;
  name: string;
  sharp: boolean;
};

export default <{ [key: string]: Note }>{
  noteB4: {
    audio: new Audio("/notes/B4.wav"),
    name: "B4",
    sharp: false,
  },
  noteASharp4: {
    audio: new Audio("/notes/ASharp4.wav"),
    name: "A#4",
    sharp: true,
  },
  noteA4: {
    audio: new Audio("/notes/A4.wav"),
    name: "A4",
    sharp: false,
  },
  noteGSharp4: {
    audio: new Audio("/notes/GSharp4.wav"),
    name: "G#4",
    sharp: true,
  },
  noteG4: {
    audio: new Audio("/notes/G4.wav"),
    name: "G4",
    sharp: false,
  },
  noteFSharp4: {
    audio: new Audio("/notes/FSharp4.wav"),
    name: "F#4",
    sharp: true,
  },
  noteF4: {
    audio: new Audio("/notes/F4.wav"),
    name: "F4",
    sharp: false,
  },
  noteE4: {
    audio: new Audio("/notes/E4.wav"),
    name: "E4",
    sharp: false,
  },
  noteDSharp4: {
    audio: new Audio("/notes/DSharp4.wav"),
    name: "D#4",
    sharp: true,
  },
  noteD4: {
    audio: new Audio("/notes/D4.wav"),
    name: "D4",
    sharp: false,
  },
  noteCSharp4: {
    audio: new Audio("/notes/CSharp4.wav"),
    name: "C#4",
    sharp: true,
  },
  noteC4: {
    audio: new Audio("/notes/C4.wav"),
    name: "C4",
    sharp: false,
  },
  noteB3: {
    audio: new Audio("/notes/B3.wav"),
    name: "B3",
    sharp: false,
  },
  noteASharp3: {
    audio: new Audio("/notes/ASharp3.wav"),
    name: "A#3",
    sharp: true,
  },
  noteA3: {
    audio: new Audio("/notes/A3.wav"),
    name: "A3",
    sharp: false,
  },
  noteGSharp3: {
    audio: new Audio("/notes/GSharp3.wav"),
    name: "G#3",
    sharp: true,
  },
  noteG3: {
    audio: new Audio("/notes/G3.wav"),
    name: "G3",
    sharp: false,
  },
  noteFSharp3: {
    audio: new Audio("/notes/FSharp3.wav"),
    name: "F#3",
    sharp: true,
  },
  noteF3: {
    audio: new Audio("/notes/F3.wav"),
    name: "F3",
    sharp: false,
  },
  noteE3: {
    audio: new Audio("/notes/E3.wav"),
    name: "E3",
    sharp: false,
  },
  noteDSharp3: {
    audio: new Audio("/notes/DSharp3.wav"),
    name: "D#3",
    sharp: true,
  },
  noteD3: {
    audio: new Audio("/notes/D3.wav"),
    name: "D3",
    sharp: false,
  },
  noteCSharp3: {
    audio: new Audio("/notes/CSharp3.wav"),
    name: "C#3",
    sharp: true,
  },
  noteC3: {
    audio: new Audio("/notes/C3.wav"),
    name: "C3",
    sharp: false,
  },
};
