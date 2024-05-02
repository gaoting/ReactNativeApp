export interface MsgListType {
  role: 'system' | 'user' | 'assistant';
  content: string;
}

export interface ErrorMsg {
  code: string;
  message: string;
}

export type IconProps = {
  name: string;
  size?: number;
  color?: string;
  style?: any;
};

export type CicleProps = {
  percent: number;
  radius: number;
  borderWidth?: number;
  shadowColor?: string;
  bgColor?: string;
  color?: string;
};

export type TaskProps = {
  backgroundColor: string;
  name: string;
  color: string;
  size: number;
  title: string;
  all: number;
  num: number;
};
