// 获取句子列表
const cloud = require('wx-server-sdk')
cloud.init()
const db = cloud.database()

exports.main = async (event, context) => {
  try {
    // 获取音频列表
    const audioClipsResult = await db.collection('audio_clips')
      .limit(20)
      .get()
    
    const audioClips = audioClipsResult.data

    // 获取所有相关的句子ID
    const sentenceIds = audioClips.map(clip => clip.sentence_id)

    // 获取句子信息
    const sentencesResult = await db.collection('sentences')
      .where({
        _id: db.command.in(sentenceIds)
      })
      .get()

    const sentences = sentencesResult.data

    // 组装数据
    const list = audioClips.map(audioClip => {
      const sentence = sentences.find(s => s._id === audioClip.sentence_id)
      return {
        audioClip,
        sentence
      }
    })

    return {
      list,
      errMsg: 'ok'
    }
  } catch (error) {
    console.error(error)
    return {
      list: [],
      errMsg: error.message
    }
  }
}
