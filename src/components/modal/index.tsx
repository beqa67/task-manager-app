import styles from './styles.module.scss'
import {useSelector} from "react-redux";
import {RootState} from "../../state/store";
const Modal = () => {
  const modalState = useSelector((state: RootState) => state.modal)
  console.log('modalState', modalState)
  return (
     <>
       {
          modalState?.modal?.key && (
             <div>
               <div className={styles.overlay}></div>
               <div className={styles.content}>
                 <div className={styles.header}>header</div>
                 <div className={styles.body}>
                   test modal
                 </div>
               </div>
             </div>
          )
       }
     </>

  )
}

export default Modal