import React, { useState, useRef, useEffect } from "react";
import { View, Input, Button, Text, Image, Slider,Switch } from "@tarojs/components";
import { useRouter } from "@tarojs/taro";
import { observer } from "mobx-react";
import { useStore } from "../../store";
import "./index.scss";
import Taro from "@tarojs/taro";

const Practice: React.FC = () => {
  const [userInput, setUserInput] = useState("");
  const [isPlaying, setIsPlaying] = useState(false);
  const [autoPlay, setAutoPlay] = useState(false);
  const [isSlowMode, setIsSlowMode] = useState(false);
  const [audioError, setAudioError] = useState("");
  const [showAnswer, setShowAnswer] = useState(false);
  const [checkResult, setCheckResult] = useState<string>("");
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const audioContext = useRef<Taro.InnerAudioContext>();
  const router = useRouter();
  const { sentenceStore } = useStore();

  // 加载数据
  useEffect(() => {
    sentenceStore.fetchAudioList().then(() => {
      // 确保有数据后设置第一题
      if (sentenceStore.audioList.length > 0) {
        sentenceStore.setCurrentAudio(sentenceStore.audioList[0]);
      }
    });
  }, []);

  useEffect(() => {
    initAudioContext();
    return () => {
      if (audioContext.current) {
        audioContext.current.destroy();
      }
    };
  }, []);

  // 初始化音频上下文
  const initAudioContext = () => {
    if (!audioContext.current) {
      audioContext.current = Taro.createInnerAudioContext();
      audioContext.current.src = '/assets/audio/common_voice_en_40865211.mp3';
      audioContext.current.playbackRate = 1.0;
      audioContext.current.autoplay = false;
      
      // 音频状态监听
      audioContext.current.onPlay(() => {
        console.log("开始播放");
        setIsPlaying(true);
        setAudioError("");
      });

      audioContext.current.onPause(() => {
        console.log("暂停播放");
        setIsPlaying(false);
      });

      audioContext.current.onStop(() => {
        console.log("停止播放");
        setIsPlaying(false);
      });

      audioContext.current.onEnded(() => {
        console.log("播放结束");
        setIsPlaying(false);
      });

      audioContext.current.onError((res) => {
        console.error("播放错误", res);
        setAudioError(`播放错误: ${res.errMsg}`);
        setIsPlaying(false);
      });

      audioContext.current.onCanplay(() => {
        console.log("音频就绪");
      });

      // 添加更多日志
      audioContext.current.onWaiting(() => {
        console.log("音频加载中");
      });

      // 添加时间更新监听
      audioContext.current.onTimeUpdate(() => {
        setCurrentTime(audioContext.current!.currentTime);
        if (duration === 0) {
          setDuration(audioContext.current!.duration);
        }
      });
    }
  };

  // 处理进度条改变
  const handleSliderChange = (e) => {
    if (!audioContext.current) return;
    const value = e.detail.value;
    audioContext.current.seek(value);
    setCurrentTime(value);
  };

  // 格式化时间
  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  // 切换播放速度
  const togglePlaybackRate = () => {
    if (!audioContext.current) return;
    
    const newRate = isSlowMode ? 1.0 : 0.7;
    audioContext.current.playbackRate = newRate;
    setIsSlowMode(!isSlowMode);
  };

  // 播放音频
  const playAudio = () => {
    if (!audioContext.current) {
      console.error("音频上下文未初始化");
      return;
    }

    try {
      if (isPlaying) {
        audioContext.current.pause();
      } else {
        audioContext.current.play();
      }
    } catch (error) {
      console.error("播放操作失败", error);
      setAudioError(`播放操作失败: ${error.message}`);
    }
  };

  // 检查答案
  const checkAnswer = () => {
    if (!userInput || userInput.trim() === '') {
      Taro.showToast({
        title: '请输入答案',
        icon: 'none',
        duration: 2000
      });
      return;
    }
    
    if (!sentenceStore.currentAudio) {
      Taro.showToast({
        title: '请等待题目加载',
        icon: 'none',
        duration: 2000
      });
      return;
    }
    
    const isAnswerCorrect = sentenceStore.checkAnswer(userInput);
    setCheckResult(isAnswerCorrect ? "正确" : "错误");
  };

  // 直接显示答案
  const showCurrentAnswer = () => {
    if (!sentenceStore.currentAudio) {
      Taro.showToast({
        title: '请等待题目加载',
        icon: 'none',
        duration: 2000
      });
      return;
    }
    setShowAnswer(true);
    setCheckResult("");
  };

  // 下一题
  const nextQuestion = () => {
    if (!sentenceStore.currentAudio || sentenceStore.audioList.length === 0) {
      Taro.showToast({
        title: '没有更多题目了',
        icon: 'none',
        duration: 2000
      });
      return;
    }

    setUserInput("");
    setShowAnswer(false);
    setCheckResult("");
    sentenceStore.nextSentence();
    if (autoPlay && audioContext.current) {
      audioContext.current.play();
    }
  };

  if (!sentenceStore.currentAudio) {
    return (
      <View className="practice">
        <View className="loading">加载中...</View>
      </View>
    );
  }

  return (
    <View className="practice">
      <View className="stats-bar">
        <View className="stat-item">
          <Text className="label">当前题目</Text>
          <Text className="value">{sentenceStore.currentIndex + 1}/{sentenceStore.audioList.length}</Text>
        </View>
        <View className="stat-item">
          <Text className="label">已答题数</Text>
          <Text className="value">{sentenceStore.totalAttempted}</Text>
        </View>
        <View className="stat-item">
          <Text className="label">正确率</Text>
          <Text className="value">{sentenceStore.accuracy}%</Text>
        </View>
        <View className="stat-item">
          <Text className="label">正确/错误</Text>
          <Text className="value">{sentenceStore.correctCount}/{sentenceStore.wrongCount}</Text>
        </View>
      </View>

      <View className="audio-section">
        <View className="audio-progress">
          <Text className="time-text">{formatTime(currentTime)}</Text>
          <Slider
            className="progress-slider"
            min={0}
            max={duration}
            value={currentTime}
            activeColor="#07c160"
            backgroundColor="#e9e9e9"
            blockSize={12}
            onChange={handleSliderChange}
          />
          <Text className="time-text">{formatTime(duration)}</Text>
        </View>

        <View className="audio-controls">
          <Button
            className={`play-btn ${isPlaying ? "playing" : ""}`}
            onClick={playAudio}
          >
            {isPlaying ? "暂停" : "播放"}
          </Button>
          <View 
            className={`speed-toggle ${isSlowMode ? "slow" : ""}`}
            onClick={togglePlaybackRate}
          >
            <Image
              className="turtle-icon"
              src={`/assets/icons/turtle.png`}
              mode="aspectFit"
            />
          </View>
        </View>
        {audioError && <Text className="error-text">{audioError}</Text>}
      </View>

      <View className="input-section">
        <Input
          className="dictation-input"
          value={userInput}
          onInput={(e) => setUserInput(e.detail.value)}
          placeholder="请输入听到的内容"
          disabled={showAnswer}
        />
      </View>

      {checkResult && !showAnswer && (
        <View className={`check-result ${checkResult === "正确" ? "correct" : "wrong"}`}>
          <Text className="result-text">
            {checkResult === "正确" ? "回答正确！" : "回答错误，请继续努力！"}
          </Text>
        </View>
      )}

      {showAnswer && sentenceStore.currentAudio && (
        <View className="answer-section">
          <View className="correct-answer">
            <Text className="label">正确答案：</Text>
            <Text className="text">{sentenceStore.currentAudio.sentence.text}</Text>
          </View>
          <View className="translation">
            <Text className="label">翻译：</Text>
            <Text className="text">{sentenceStore.currentAudio.sentence.translation}</Text>
          </View>
        </View>
      )}

      <View className="control-section">
        <View className="auto-play">
          <Text>自动播放</Text>
          <Switch
            checked={autoPlay}
            onChange={(e) => setAutoPlay(e.detail.value)}
          />
        </View>
      </View>

      <View className="button-group">
        {!showAnswer ? (
          <>
            <Button className="check-btn" onClick={checkAnswer}>
              检查答案
            </Button>
            <Button className="show-answer-btn" onClick={showCurrentAnswer}>
              显示答案
            </Button>
          </>
        ) : (
          <Button className="next-btn" onClick={nextQuestion}>
            下一题
          </Button>
        )}
      </View>
    </View>
  );
};

export default observer(Practice);
