import { View, Text } from '@tarojs/components'
import { useLoad, navigateTo } from '@tarojs/taro'
import { observer } from 'mobx-react'
import React from 'react'
import { useStore } from '../../store'
import './index.scss'

const Index: React.FC = () => {
  const { sentenceStore } = useStore()

  useLoad(() => {
    sentenceStore.fetchAudioList()
  })

  const handleSentenceClick = (audioId: string) => {
    navigateTo({
      url: `/pages/practice/index?id=${audioId}`
    })
  }

  return (
    <View className='index'>
      <View className='header'>
        <Text className='title'>英语听写练习</Text>
      </View>
      
      {sentenceStore.loading ? (
        <View className='loading'>加载中...</View>
      ) : (
        <View className='sentence-list'>
          {sentenceStore.audioList.map(audio => (
            <View
              key={audio.audioClip._id}
              className='sentence-item'
              onClick={() => handleSentenceClick(audio.audioClip._id)}
            >
              <View className='sentence-text'>{audio.sentence.text}</View>
              <View className='sentence-info'>
                <Text className='level'>难度: {audio.sentence.level}</Text>
                <Text className='category'>{audio.sentence.category}</Text>
              </View>
            </View>
          ))}
        </View>
      )}
    </View>
  )
}

export default observer(Index)
