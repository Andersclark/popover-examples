import { ReactNode, useMemo } from "react"
import styles from './Popover.module.css'

type PopoverProps = {
  children: ReactNode | ReactNode[];
  id: string;
  manual?:boolean;
  modal?: boolean;
  position?: "bottom-right";
}

export default function Popover({children, id, position, manual = false, modal = false}: PopoverProps) {
  const classes = useMemo(() => {
    const classList = [styles.popover]
    position && classList.push(styles[`position-${position}`])
    modal && classList.push(styles.modal)
    return classList.join(' ')
  }, [position, modal])

  return(
    // @ts-expect-error `popover` property not covered in type def(?)
    <div popover={manual ? "manual" : "auto"} id={id} className={classes} role="dialog">
      🎉
      {children}
    </div>)

}