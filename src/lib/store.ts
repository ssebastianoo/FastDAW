import { writable } from "svelte/store";
import type { Note } from "./notes";

type Beats = {
  [key: string]: {
    note: Note;
  }[];
};

type coloredBlock = {
  note: string;
  block: number;
};

export const beats = writable<Beats>({});
export const songLength = writable(100);
export const coloredBlocks = writable<coloredBlock[]>([]);
export const playlist = writable<HTMLDivElement>();
export const isMobile = writable(false);
