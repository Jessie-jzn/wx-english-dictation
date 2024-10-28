import { createContext, useContext } from 'react'
import SentenceStore from './sentence'

const store = {
  sentenceStore: new SentenceStore()
}

const StoreContext = createContext(store)

export const useStore = () => useContext(StoreContext)

export default store
