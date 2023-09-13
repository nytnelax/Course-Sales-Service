import { DetailedHTMLProps, HtmlHTMLAttributes } from "react";
import { FieldError } from "react-hook-form";

export interface InputProps extends DetailedHTMLProps<HtmlHTMLAttributes<HTMLInputElement>, HTMLInputElement>{

    error?: FieldError;
    

}

