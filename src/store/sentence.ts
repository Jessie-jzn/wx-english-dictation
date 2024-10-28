import { makeAutoObservable } from 'mobx'
import { getSentenceList } from '../services/sentence'
import { Sentence } from '../types/sentence'

class SentenceStore {
  sentences: Sentence[] = []
  loading = false

  constructor() {
    makeAutoObservable(this)
  }

  async fetchSentences() {
    this.loading = true
    try {
      const list = await getSentenceList()
      this.sentences = list
    } finally {
      this.loading = false
    }
  }
}

export default SentenceStore
