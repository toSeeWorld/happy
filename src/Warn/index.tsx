import React from 'react';
import t from 'prop-types';
import './index.scss';
import { WarnProps, KindMap } from '../types'

const prefixCls = 'happy-alerts';
const kinds: KindMap = {
  info: '#5352ED',
  positive: '#2ED573',
  negative: '#FF4757',
  warning: 'red',
};
const Warn: React.FC<WarnProps> = ({ children, kind = 'info', ...rest }) => (
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
Warn.propTypes = {
  kind: t.oneOf(['info', 'positive', 'negative', 'warning']),
};

export default Warn;
