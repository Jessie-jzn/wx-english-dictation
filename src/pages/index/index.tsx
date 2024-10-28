import { View, Text } from '@tarojs/components'
import { useLoad, navigateTo } from '@tarojs/taro'
import { observer } from 'mobx-react'
import React from 'react'
import { useStore } from '../../store'
import './index.scss'

const Index: React.FC = () => {
  const { sentenceStore } = useStore()

  useLoad(() => {
    sentenceStore.fetchSentences()
  })

  const handleSentenceClick = (id: string) => {
    navigateTo({
      url: `/pages/practice/index?id=${id}`
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
          {sentenceStore.sentences.map(sentence => (
            <View
              key={sentence._id}
              className='sentence-item'
              onClick={() => handleSentenceClick(sentence._id)}
            >
              <View className='sentence-text'>{sentence.text}</View>
              <View className='sentence-info'>
                <Text className='level'>难度: {sentence.level}</Text>
                <Text className='category'>{sentence.category}</Text>
              </View>
            </View>
          ))}
        </View>
      )}
    </View>
  )
}

export default observer(Index)
