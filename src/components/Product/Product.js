import React, { useContext, useState } from "react";
import ProductContext from "./../../context/products/ProductContext";
import "./Product.scss";
import Modal from "react-modal"
import ModalProduct from "./../modalProduct/ModalProduct";

const Product = ({ name, count, price, promotionalPrice }) => {
  const productContext = useContext(ProductContext);
  const [modal, setModal] = useState(false);

  const handleCloseModal = () => {
    setModal(false);
  }
  const handleOpenModal = () => {
    setModal(true);
  }
  const handleClick = () => {
    productContext.deleteProduct(name);
  }
  return (
    <div className="product">
      <span>{name}</span>
      <span>{count}</span>
      <span>{price}</span>
      <span>{promotionalPrice}</span>
      <span><button onClick={handleOpenModal}>Editar</button></span>
      <span><button onClick={handleClick}>Eliminar</button></span>
      <Modal
        isOpen={modal}
        onRequestClose={handleCloseModal}
        ariaHideApp={false}
      >
        <ModalProduct name={name} count={count} price={price} promotionalPrice={promotionalPrice} closeModal={handleCloseModal} />
      </Modal>
    </div>
  );
};

export default Product;
