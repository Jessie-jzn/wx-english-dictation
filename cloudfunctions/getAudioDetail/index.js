// 获取音频详情
const cloud = require('wx-server-sdk')
cloud.init()
const db = cloud.database()

exports.main = async (event, context) => {
  try {
    const { audio_id } = event
    if (!audio_id) {
      throw new Error('audio_id is required')
    }

    // 获取音频信息
    const audioClipResult = await db.collection('audio_clips').doc(audio_id).get()
    const audioClip = audioClipResult.data

    // 获取相关的句子信息
    const sentenceResult = await db.collection('sentences').doc(audioClip.sentence_id).get()

    return {
      audioClip,
      sentence: sentenceResult.data,
      errMsg: 'ok'
    }
  } catch (error) {
    console.error(error)
    return {
      errMsg: error.message
    }
  }
} 