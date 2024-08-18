import React from "react";
export interface WarnProps {
    kind?: 'info' | 'positive' | 'negative' | 'warning';
    children: React.ReactNode;
}

export type KindMap = Record<Required<WarnProps>['kind'], string>;
declare const Warn: React.FC<WarnProps>;
export default Warn