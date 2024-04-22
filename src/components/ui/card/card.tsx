import s from './card.module.scss';
import { ComponentPropsWithoutRef } from 'react';

export type CardProps = ComponentPropsWithoutRef<'div'>;

export const Card = (props: CardProps) => {
  const { className, children, ...restProps } = props;
  
  return (
    <div className={`${s.card} ${className ?? ''}`} {...restProps}>
      {children}
    </div>
  );
};

