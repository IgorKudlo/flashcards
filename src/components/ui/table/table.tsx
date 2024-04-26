import s from './table.module.scss';
import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react';

export const Table = forwardRef<HTMLTableElement, ComponentPropsWithoutRef<'table'>>(
  ({ className, ...restProps }, ref) => {
    return <table ref={ref} className={`${s.table} ${className}`} {...restProps}></table>;
  });

export const TableHead = forwardRef<ElementRef<'thead'>, ComponentPropsWithoutRef<'thead'>>(
  ({ ...restProps }, ref) => {
    return <thead ref={ref} {...restProps}></thead>;
  });

export const TableHeadCell = forwardRef<ElementRef<'th'>, ComponentPropsWithoutRef<'th'>>(
  ({ children, ...restProps }, ref) => {
    return <th ref={ref} {...restProps}>{children}</th>;
  });

export const TableBody = forwardRef<ElementRef<'tbody'>, ComponentPropsWithoutRef<'tbody'>>(
  ({ ...restProps }, ref) => {
    return <tbody ref={ref} {...restProps}></tbody>;
  });

export const TableRow = forwardRef<ElementRef<'tr'>, ComponentPropsWithoutRef<'tr'>>(
  ({ ...restProps }, ref) => {
    return <tr ref={ref} {...restProps}></tr>;
  });

export const TableCell = forwardRef<ElementRef<'td'>, ComponentPropsWithoutRef<'td'>>(
  ({ children, ...restProps }, ref) => {
    return <td ref={ref} {...restProps}>{children}</td>;
  });