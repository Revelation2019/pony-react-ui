import React from 'react';
/** 类型 */
export declare type IBtnType = 'primary' | 'default' | 'danger' | 'link';
/** 大小 */
export declare type IBtnSize = 'lg' | 'sm';
export interface IButtonProps {
    /** 外部样式 */
    className?: string;
    /** 按钮类型 */
    type?: IBtnType;
    /** 按钮大小 */
    size?: IBtnSize;
    /** 是否禁用 */
    disabled?: boolean;
    /** 子元素 */
    children: React.ReactNode;
}
/** 按钮 */
export declare const Button: (props: IButtonProps) => JSX.Element;
