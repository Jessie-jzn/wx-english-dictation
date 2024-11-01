import { AudioDetail } from '../services/dataService'

export const mockData: { list: AudioDetail[] } = {
  list: [
    {
      audioClip: {
        _id: '1',
        sentence_id: '1',
        url: '/assets/audio/common_voice_en_40865211.mp3',
        duration: 3
      },
      sentence: {
        _id: '1',
        text: 'Hello, how are you?',
        translation: '你好，你好吗？',
        level: 1,
        category: '日常对话'
      }
    },
    {
      audioClip: {
        _id: '2',
        sentence_id: '2',
        url: '/assets/audio/common_voice_en_40865211.mp3',
        duration: 4
      },
      sentence: {
        _id: '2',
        text: 'Nice to meet you.',
        translation: '很高兴见到你。',
        level: 1,
        category: '日常对话'
      }
    }
  ]
} 