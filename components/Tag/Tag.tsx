import { PProps } from "./Tag.props";
import styles from "./Tag.module.css";
import cn from 'classnames';

export const Tag = ({size = 'm', children,color = 'ghost', href, className, ...props}:PProps): JSX.Element=> {
  return(
    <div
        className={cn(styles.tag, className,{
            [styles.s]: size == 's',
            [styles.s]: size == 'm',
            [styles.ghost]: color == 'ghost',
            [styles.red]: color == 'red',
            [styles.gray]: color == 'grey',
            [styles.green]: color == 'green',
            [styles.primary]: color == 'primary',

        })}
        {...props}
    >{
        href 
          ?<a href={href}>{children}</a>
          :<>{children}</>
      }
       
    </div>
  )
    };
