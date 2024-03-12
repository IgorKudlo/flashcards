import s from './card.module.scss';
import { ComponentPropsWithoutRef, ElementType } from 'react';

export type CardProps<T extends ElementType = 'div'> = {
  as?: T
} & ComponentPropsWithoutRef<T>

export const Card = (props: CardProps) => {
  const { as: Component = 'div', className, children, ...rest } = props;
  return (
    <Component className={`${s.card} ${className ?? ''}`} {...rest}>{children}</Component>
  );
};