import { ReviewModel } from "@/interfaces/product.interface";
import { DetailedHTMLProps, DetailedReactHTMLElement, HtmlHTMLAttributes, ReactNode } from "react";

export interface ReviewProps extends DetailedHTMLProps<HtmlHTMLAttributes<HTMLDivElement>, HTMLDivElement>{
    review: ReviewModel;
}