import { ComponentPropsWithoutRef, ElementType } from 'react';
import s from './typography.module.scss';

export type TypographyProps<T extends ElementType = 'div'> = {
  as?: T
  variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'body1' | 'subtitle1' | 'body2' | 'subtitle2'
    | 'caption' | 'overline' | 'link1' | 'link2'
} & ComponentPropsWithoutRef<T>

export const Typography = <T extends ElementType = 'div'>(props: TypographyProps<T>) => {
  const {
    variant = 'body1',
    className,
    as: Component = 'div',
    children,
    ...restProps
  } = props;

  return (
    <Component
      className={`${s[variant]} ${className ?? ''}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};