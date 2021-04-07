import React from 'react';
import classNames from 'classnames';

export interface IButtonProps {
  onClick?: React.MouseEventHandler;
  // 类型
  primary?: boolean;
  secondary?: boolean;
  outline?: boolean;
  dashed?: boolean;
  link?: boolean;
  text?: boolean;

  // 形状
  round?: boolean;
  noRadius?: boolean;
  fat?: boolean;

  // 尺寸
  xLarge?: boolean;
  large?: boolean;
  small?: boolean;
  xSmall?: boolean;
  xxSmall?: boolean;

  // 宽度
  long?: boolean;
  short?: boolean;

  // 颜色
  success?: boolean;
  warn?: boolean;
  danger?: boolean;

  // 禁用状态
  disabled?: boolean;

  href?: string;

  className?: string;
  style?: React.CSSProperties;

  children?: React.ReactNode;
}

/** 按钮 */
export const Button = (props: IButtonProps) => {
  const {
    className: tempClassName,
    style,
    onClick,
    children,
    primary,
    secondary,
    outline,
    dashed,
    link,
    text,
    round,
    noRadius,
    fat,
    xLarge,
    large,
    small,
    xSmall,
    xxSmall,
    long,
    short,
    href,
    success,
    danger,
    warn,
    disabled,
  } = props;

  const className = classNames(
    {
      'br-button': true,
      'br-button-primary': primary,
      'br-button-secondary': secondary && !text,
      'br-button-outline': outline,
      'br-button-dashed': dashed,
      'br-button-link': link,
      'br-button-text': text && !secondary,
      'br-button-text-secondary': secondary && text,
      'br-button-round': round,
      'br-button-rectangle': noRadius,
      'br-button-fat': fat,
      'br-button-xl': xLarge,
      'br-button-lg': large,
      'br-button-sm': small,
      'br-button-xs': xSmall,
      'br-button-xxs': xxSmall,
      'br-button-long': long,
      'br-button-short': short,
      'br-button-success': success,
      'br-button-warn': warn,
      'br-button-danger': danger,
      'br-button-disabled': disabled,
    },
    tempClassName
  );

  if (href) {

    return (
      <a
        className={className}
        style={style}
        onClick={onClick}
        href={href}
      >
        {children}
      </a> 
    );
  } else {
    return (
      <button 
        type="button"
        className={className}
        style={style}
        onClick={onClick}
        disabled={disabled}>
        <span className="pony-button__content">{children}</span>
      </button>
    );
  }
};
