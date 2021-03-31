import React from 'react';
import classNames from 'classnames';

/** 类型 */
export type IBtnType = 'primary' | 'default' | 'danger' | 'link';

/** 大小 */
export type IBtnSize = 'lg' | 'sm';

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
export const Button = (props: IButtonProps) => {
  const { className, size, type = 'default', children, disabled = false } = props;

  return <div className={classNames('btn', className, {
    [`btn-${size}`]: size,
    [`btn-${type}`]: type,
    'btn-disabled': disabled
  })}>
    { children }
  </div>;
};
