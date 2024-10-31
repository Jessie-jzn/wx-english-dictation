/// <reference types="@tarojs/taro" />

declare module '*.png';
declare module '*.gif';
declare module '*.jpg';
declare module '*.jpeg';
declare module '*.svg';
declare module '*.css';
declare module '*.less';
declare module '*.scss';
declare module '*.sass';
declare module '*.styl';

declare namespace NodeJS {
  interface ProcessEnv {
    TARO_ENV: 'weapp' | 'swan' | 'alipay' | 'h5' | 'rn' | 'tt' | 'quickapp' | 'qq' | 'jd'
    CLOUD_ENV_ID: string
  }
}

// 补充微信小程序的类型声明
declare namespace WechatMiniprogram {
  interface Cloud {
    init: (config: {
      env: string;
      traceUser?: boolean;
    }) => void;
    database: () => any;
    callFunction: (params: {
      name: string;
      data?: any;
    }) => Promise<{
      result: any;
      errMsg: string;
    }>;
  }

  interface Wx {
    cloud: Cloud;
  }
}

declare const wx: WechatMiniprogram.Wx;
