import React from 'react';
import t from 'prop-types';
import './style/index';
import { AlertProps, KindMap } from '../types'

const prefixCls = 'happy-alerts';
const kinds: KindMap = {
  info: '#5352ED',
  positive: '#2ED573',
  negative: '#FF4757',
  warning: 'red',
};
const Alert: React.FC<AlertProps> = ({ children, kind = 'info', ...rest }) => (
  <div
    className={prefixCls}
    style={{
      background: kinds[kind],
    }}
    {...rest}
  >
    {children}
  </div>
);
const a = "a";
const A = () => {
  debugger
}
Alert.propTypes = {
  kind: t.oneOf(['info', 'positive', 'negative', 'warning']),
};

export default Alert;
