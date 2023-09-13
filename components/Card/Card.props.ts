import { DetailedHTMLProps, DetailedReactHTMLElement, HtmlHTMLAttributes, ReactNode } from "react";

export interface CardProps extends DetailedHTMLProps<HtmlHTMLAttributes<HTMLDivElement>, HTMLDivElement>{
    color?: 'white' | 'blue';
    children: ReactNode;
}