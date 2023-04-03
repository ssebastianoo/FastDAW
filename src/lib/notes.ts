import wavC from "../assets/notes/C.wav";
import wavCSharp from "../assets/notes/CSharp.wav";
import wavD from "../assets/notes/D.wav";
import wavDSharp from "../assets/notes/DSharp.wav";
import wavE from "../assets/notes/E.wav";
import wavF from "../assets/notes/F.wav";
import wavFSharp from "../assets/notes/FSharp.wav";
import wavG from "../assets/notes/G.wav";
import wavGSharp from "../assets/notes/GSharp.wav";
import wavA from "../assets/notes/A.wav";
import wavASharp from "../assets/notes/ASharp.wav";
import wavB from "../assets/notes/B.wav";

// export const noteC = new Audio(wavC);
// export const noteCSharp = new Audio(wavCSharp);
// export const noteD = new Audio(wavD);
// export const noteDSharp = new Audio(wavDSharp);
// export const noteE = new Audio(wavE);
// export const noteF = new Audio(wavF);
// export const noteFSharp = new Audio(wavFSharp);
// export const noteG = new Audio(wavG);
// export const noteGSharp = new Audio(wavGSharp);
// export const noteA = new Audio(wavA);
// export const noteASharp = new Audio(wavASharp);
// export const noteB = new Audio(wavB);

export type Note = {
  audio: HTMLAudioElement;
  name: string;
  sharp: boolean;
};

export default <{ [key: string]: Note }>{
  noteB: {
    audio: new Audio(wavB),
    name: "B",
    sharp: false,
  },
  noteASharp: {
    audio: new Audio(wavASharp),
    name: "A#",
    sharp: true,
  },
  noteA: {
    audio: new Audio(wavA),
    name: "A",
    sharp: false,
  },
  noteGSharp: {
    audio: new Audio(wavGSharp),
    name: "G#",
    sharp: true,
  },
  noteG: {
    audio: new Audio(wavG),
    name: "G",
    sharp: false,
  },
  noteFSharp: {
    audio: new Audio(wavFSharp),
    name: "F#",
    sharp: true,
  },
  noteF: {
    audio: new Audio(wavF),
    name: "F",
    sharp: false,
  },
  noteE: {
    audio: new Audio(wavE),
    name: "E",
    sharp: false,
  },
  noteDSharp: {
    audio: new Audio(wavDSharp),
    name: "D#",
    sharp: true,
  },
  noteD: {
    audio: new Audio(wavD),
    name: "D",
    sharp: false,
  },
  noteCSharp: {
    audio: new Audio(wavCSharp),
    name: "C#",
    sharp: true,
  },
  noteC: {
    audio: new Audio(wavC),
    name: "C",
    sharp: false,
  },
};
