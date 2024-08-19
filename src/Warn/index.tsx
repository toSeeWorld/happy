import React, { useEffect } from 'react';
import t from 'prop-types';
import './index.scss';
import { WarnProps, KindMap } from '../types'
import { find } from 'lodash'
const prefixCls = 'happy-alerts';
const kinds: KindMap = {
  info: '#5352ED',
  positive: '#2ED573',
  negative: '#FF4757',
  warning: 'red',
};
const Warn: React.FC<WarnProps> = ({ children, kind = 'info', ...rest }) => {
  // 使用React Hook useEffect，在组件挂载后执行
  useEffect(() => {
    // 创建一个包含数字1的数组
    const list = [1]
    // 使用lodash的find方法，在list中查找第一个满足条件的元素
    const a = find(list, (it: any) => it)
    // 打印a的值
    console.log('a', a)
  }, [])

  // 返回一个div元素，用于显示警告信息
  return <div
    // 设置div元素的类名为prefixCls
    className={prefixCls}
    // 根据kind属性设置div元素的背景颜色
    style={{
      background: kinds[kind],
    }}
    // 将其余未解构的属性传递给div元素
    {...rest}
  >
    {children} // 在div元素中显示传入的children
  </div>
}
Warn.propTypes = {
  kind: t.oneOf(['info', 'positive', 'negative', 'warning']),
};

export default Warn;
