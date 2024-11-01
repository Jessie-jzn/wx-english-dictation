import { IDataService, AudioDetail, CloudFunctionResponse } from './dataService'
import { mockData } from '../mock/sentences'
import Taro from '@tarojs/taro'

export class WechatCloudDataService implements IDataService {
  private isCloudAvailable(): boolean {
    return process.env.TARO_ENV === 'weapp' && !!Taro.cloud;
  }

  async getSentenceList(): Promise<AudioDetail[]> {
    if (!this.isCloudAvailable()) {
      console.log('使用mock数据');
      return Promise.resolve(mockData.list);
    }

    try {
      const { result } = await wx.cloud.callFunction({
        name: 'getSentenceList',
        data: {}
      }) as { result: CloudFunctionResponse<AudioDetail> };

      if (!result.list) {
        throw new Error('No data returned');
      }

      return result.list;
    } catch (error) {
      console.error('获取句子列表失败:', error);
      return mockData.list;
    }
  }

  async getAudioDetail(audio_id: string): Promise<AudioDetail> {
    if (!this.isCloudAvailable()) {
      const detail = mockData.list.find(item => item.audioClip._id === audio_id);
      if (!detail) {
        throw new Error('Audio not found');
      }
      return detail;
    }

    try {
      const { result } = await wx.cloud.callFunction({
        name: 'getAudioDetail',
        data: { audio_id }
      }) as { result: AudioDetail & { errMsg: string } };

      if (result.errMsg !== 'ok') {
        throw new Error(result.errMsg);
      }

      return {
        audioClip: result.audioClip,
        sentence: result.sentence
      };
    } catch (error) {
      console.error('获取音频详情失败:', error);
      const detail = mockData.list.find(item => item.audioClip._id === audio_id);
      if (!detail) {
        throw new Error('Audio not found');
      }
      return detail;
    }
  }
} 