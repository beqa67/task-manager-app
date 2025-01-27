import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "../../state/store";
import {closeModal} from "../../state/modal/modalSlice";
import styles from './styles.module.scss'
const Modal = () => {
  const modalState = useSelector((state: RootState) => state.modal)
  const dispatch = useDispatch<AppDispatch>()

  return (
     <>
       {
          modalState?.modal?.key && (
             <div>
               <div className={styles.overlay} onClick={() => dispatch(closeModal())}></div>
               <div className={styles.content}>
                 <div className={styles.header}>
                   <span>header</span>
                   <span onClick={() => dispatch(closeModal())}>X</span>
                 </div>
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