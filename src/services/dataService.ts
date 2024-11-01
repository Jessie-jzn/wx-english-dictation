import { Sentence } from '../types/sentence'

export interface AudioClip {
  _id: string;
  sentence_id: string;
  url: string;
  duration: number;
}

export interface AudioDetail {
  audioClip: AudioClip;
  sentence: Sentence;
}

export interface CloudFunctionResponse<T> {
  errMsg: string;
  list?: T[];
}

export interface IDataService {
  getSentenceList(): Promise<AudioDetail[]>;
  getAudioDetail(audio_id: string): Promise<AudioDetail>;
} 