import { View, Text, Input, Button } from '@tarojs/components'
import { useLoad, useRouter } from '@tarojs/taro'
import React, { useState } from 'react'
import { observer } from 'mobx-react'
import { useStore } from '../../store'
import './index.scss'

const Practice: React.FC = () => {
  const router = useRouter()
  const [userInput, setUserInput] = useState('')
  
  useLoad(() => {
    const { id } = router.params
    // TODO: 根据id加载具体的句子
  })

  return (
    <View className='practice'>
      <View className='audio-section'>
        {/* TODO: 添加音频播放组件 */}
      </View>
      
      <View className='input-section'>
        <Input
          className='dictation-input'
          value={userInput}
          onInput={e => setUserInput(e.detail.value)}
          placeholder='请输入听到的内容'
        />
      </View>

      <Button className='submit-btn'>
        提交答案
      </Button>
    </View>
  )
}

export default observer(Practice)
