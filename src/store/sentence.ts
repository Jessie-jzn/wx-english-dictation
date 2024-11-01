import { makeAutoObservable } from 'mobx'
import { IDataService, AudioDetail } from '../services/dataService'

class SentenceStore {
  audioList: AudioDetail[] = []
  currentAudio: AudioDetail | null = null
  loading = false
  dataService: IDataService
  currentIndex: number = 0
  correctCount: number = 0
  wrongCount: number = 0
  attemptedQuestions: Set<string> = new Set() // 记录已尝试的题目ID

  constructor(dataService: IDataService) {
    makeAutoObservable(this)
    this.dataService = dataService
  }

  get totalAttempted() {
    return this.attemptedQuestions.size
  }

  get accuracy() {
    if (this.totalAttempted === 0) return 0
    return Math.round((this.correctCount / this.totalAttempted) * 100)
  }

  async fetchAudioList() {
    this.loading = true
    try {
      const list = await this.dataService.getSentenceList()
      this.audioList = list
      if (!this.currentAudio && list?.length > 0) {
        this.currentAudio = list[0]
        this.currentIndex = 0
      }
    } finally {
      this.loading = false
    }
  }

  setCurrentAudio(audio: AudioDetail) {
    this.currentAudio = audio
    this.currentIndex = this.audioList.findIndex(a => a.audioClip._id === audio.audioClip._id)
  }

  nextSentence() {
    const nextIndex = this.currentIndex + 1
    if (nextIndex < this.audioList?.length) {
      this.currentIndex = nextIndex
      this.currentAudio = this.audioList[nextIndex]
    } else {
      // 回到第一题
      this.currentIndex = 0
      this.currentAudio = this.audioList[0]
    }
  }

  checkAnswer(userInput: string): boolean {
    if (!this.currentAudio) return false
    
    const isCorrect = userInput.trim().toLowerCase() === this.currentAudio.sentence.text.trim().toLowerCase()
    
    // 只在第一次回答时计入统计
    if (!this.attemptedQuestions.has(this.currentAudio.audioClip._id)) {
      this.attemptedQuestions.add(this.currentAudio.audioClip._id)
      if (isCorrect) {
        this.correctCount++
      } else {
        this.wrongCount++
      }
    }
    
    return isCorrect
  }

  resetStats() {
    this.correctCount = 0
    this.wrongCount = 0
    this.attemptedQuestions.clear()
  }
}

export default SentenceStore
