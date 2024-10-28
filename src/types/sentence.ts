// 句子数据类型定义
export interface Sentence {
  _id: string;
  text: string;
  audioUrl: string;
  level: number;
  category: string;
  createdAt: Date;
}
