import { DetailedHTMLProps,  HtmlHTMLAttributes, ReactNode } from "react";

export interface PProps extends DetailedHTMLProps<HtmlHTMLAttributes<HTMLDivElement>, HTMLDivElement>{
    size?: 's' | 'm';
    children: ReactNode;
    color?: 'ghost' | 'red' | 'grey' | 'green' | 'primary';
    href?: string;
}