export type KanjiInfo = IKanjiInfoError | IKanjiInfoSuccess

export interface IKanjiInfoError {
  error: string
}
export interface IKanjiInfoSuccess {
  kanji: Kanji;
  radical: Radical;
  references: References;
  examples?: (ExamplesEntity)[] | null;
}
export interface Kanji {
  character: string;
  meaning: Meaning;
  strokes: {count: number};
  onyomi: Onyomi;
  kunyomi: KunyomiOrName;
  video: Video;
}
export interface Meaning {
  english: string;
}
export interface Onyomi {
  romaji: string;
  katakana: string;
}
export interface KunyomiOrName {
  romaji: string;
  hiragana: string;
}
export interface Video {
  poster: string;
  mp4: string;
  webm: string;
}
export interface Radical {
  character: string;
  strokes: number;
  image: string;
  position: Position;
  name: KunyomiOrName;
  meaning: Meaning;
  animation?: (string)[] | null;
}
export interface Position {
  hiragana: string;
  romaji: string;
  icon: string;
}
export interface References {
  grade: number;
  kodansha: string;
  classic_nelson: string;
}
export interface ExamplesEntity {
  japanese: string;
  meaning: Meaning;
  audio: Audio;
}
export interface Audio {
  opus: string;
  aac: string;
  ogg: string;
  mp3: string;
}
