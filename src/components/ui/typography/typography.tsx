import s from './typography.module.scss';
import { ComponentPropsWithoutRef, ElementType } from 'react';

export type TypographyProps<T extends ElementType = 'div'> = {
  as?: T;
  variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'body1' | 'body2' | 'subtitle1' | 'subtitle2'
    | 'caption' | 'overline' | 'link1' | 'link2';
} & ComponentPropsWithoutRef<T>;

export const Typography = <T extends ElementType = 'div'>(props: TypographyProps<T>) => {
  const { variant = 'body1', className, as: Component = 'div', ...rest } = props;
  return (
    <Component className={`${s[variant]} ${className ?? ''}`} {...rest} />
  );
};