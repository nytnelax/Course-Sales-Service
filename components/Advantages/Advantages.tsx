import { AdvantagesProps } from "./Advantages.props";
import styles from "./Advantages.module.css";
import cn from 'classnames';
import CheckIcon from './check.svg'
import classNames from "classnames";



export const Advantages = ({advantages}:AdvantagesProps): JSX.Element=> {
  return(
  <>
    {advantages?.map(a => (
      <div key={a._id} className={styles.advantages}>
        <CheckIcon/>
        <div className={styles.title}>{a.title}</div>
        <hr className={styles.vline}/>
        <div>{a.description}</div>




      </div>


    ))}
  </>
  )
    };
