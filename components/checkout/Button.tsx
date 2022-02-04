import React, { FC, useContext } from 'react';
import Modal from 'react-modal';
import { CartContext } from '../../context/CartContext';
import styles from '../../styles/checkout.module.scss';
import CartIcon from '../svg/CartIcon';
import { CheckOut } from './CheckOut';

// Modal.setAppElement('#root'
const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};
interface CheckOutButtonProps {}
export const CheckOutButton: FC<CheckOutButtonProps> = () => {
  const { cart } = useContext(CartContext);
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    //     subtitle.style.color = '#f00';
  }

  function closeModal() {
    setIsOpen(false);
  }
  return (
    <>
      <div
        className={styles.checkout_button}
        style={{ visibility: cart.length > 0 ? 'visible' : 'hidden' }}
        onClick={() => openModal()}
      >
        <div className={styles.docker}>{cart.length}</div>
        <CartIcon />
        View cart
      </div>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        shouldCloseOnEsc
        shouldCloseOnOverlayClick
        ariaHideApp={false}
        className={styles.modal}
        overlayClassName={styles.overlay}
      >
        <CheckOut />
      </Modal>
    </>
  );
};
