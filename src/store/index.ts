import { createContext, useContext } from 'react'
import SentenceStore from './sentence'
import { WechatCloudDataService } from '../services/wechatCloudDataService'

const dataService = new WechatCloudDataService()

const store = {
  sentenceStore: new SentenceStore(dataService)
}

const StoreContext = createContext(store)

export const useStore = () => useContext(StoreContext)

export default store
