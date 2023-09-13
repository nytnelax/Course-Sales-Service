import { DetailedHTMLProps, DetailedReactHTMLElement, HtmlHTMLAttributes, ReactNode } from "react";

export interface LayoutProps extends DetailedHTMLProps<HtmlHTMLAttributes<HTMLDivElement>, HTMLDivElement>{
    size?: 's' | 'm' | 'l';
    children: ReactNode;
}