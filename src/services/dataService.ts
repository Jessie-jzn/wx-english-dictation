import { Sentence } from '../types/sentence'

export interface Speaker {
  _id: string;
  name: string;
  gender: 'male' | 'female';
  accent: string;
}

export interface AudioClip {
  _id: string;
  sentence_id: string;
  speaker_id: string;
  url: string;
  duration: number;
}

export interface AudioDetail {
  audioClip: AudioClip;
  sentence: Sentence;
  speaker: Speaker;
}

export interface IDataService {
  getSentenceList(): Promise<AudioDetail[]>;
  getAudioDetail(audio_id: string): Promise<AudioDetail>;
} 