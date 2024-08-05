import React from "react";
export interface AlertProps {
    kind?: 'info' | 'positive' | 'negative' | 'warning';
    children: React.ReactNode;
}

export type KindMap = Record<Required<AlertProps>['kind'], string>;
declare const Button: React.FC<AlertProps>;
export default Button