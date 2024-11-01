import React from "react";
import { Provider } from "mobx-react";
import stores from "./store";
import "./app.scss";
import Taro from "@tarojs/taro";

// 初始化云开发
if (process.env.TARO_ENV === 'weapp') {
  try {
    Taro.cloud.init({
      env: process.env.CLOUD_ENV_ID, // 你的云环境ID
      traceUser: true // 是否在将用户访问记录到用户管理中，在控制台中可见
    });
    console.log('云开发初始化成功');
  } catch (error) {
    console.error('云开发初始化失败:', error);
  }
}

const App: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <Provider {...stores}>{children}</Provider>;
};

export default App;
