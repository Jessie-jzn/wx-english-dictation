import * as Taro from '@tarojs/taro'
import { Sentence } from '../types/sentence'

const db = Taro.cloud.database()
const sentencesCollection = db.collection('sentences')

export const getSentenceList = async () => {
  try {
    const { data } = await sentencesCollection
      .orderBy('createdAt', 'desc')
      .limit(20)
      .get()
    return data as Sentence[]
  } catch (error) {
    console.error('获取句子列表失败：', error)
    return []
  }
}
