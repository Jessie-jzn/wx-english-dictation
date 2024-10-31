import { IDataService, AudioDetail } from './dataService'
import { mockData } from '../mock/sentences'

export class WechatCloudDataService implements IDataService {
  async getSentenceList(): Promise<AudioDetail[]> {
    // 直接返回模拟数据
    return Promise.resolve(mockData.list)
  }

  async getAudioDetail(audio_id: string): Promise<AudioDetail> {
    // 从模拟数据中查找对应的音频详情
    const detail = mockData.list.find(item => item.audioClip._id === audio_id)
    if (!detail) {
      throw new Error('Audio not found')
    }
    return Promise.resolve(detail)
  }
} 