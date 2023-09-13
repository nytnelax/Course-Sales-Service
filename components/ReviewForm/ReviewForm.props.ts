import { ReviewModel } from "@/interfaces/product.interface";
import { DetailedHTMLProps, DetailedReactHTMLElement, HtmlHTMLAttributes, ReactNode } from "react";

export interface ReviewFormProps extends DetailedHTMLProps<HtmlHTMLAttributes<HTMLDivElement>, HTMLDivElement>{
    productId: string;
    isOpened: boolean;
}