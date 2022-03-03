import Modal from "./Modal";
import {useModal} from "../hooks/useModal";
import ContacForm from "../FormValidation/ContacForm";
import SongSearch from "../SongSearch/SongSearch";
import ModalPortal from "./ModalPortal";

const Modals = () => {
    const [isOpenModal1, openModal1, closeModal1] = useModal(false);
    const [isOpenModal2, openModal2, closeModal2] = useModal(false);
    const [isOpenContact, openModal3, closeContact] = useModal(false);
    const [isOpenSong, openModalSong, closeSong] = useModal(false);
    const [isOpenModal, openModalPortal, closePortal] = useModal(false);
    return (
        <div>
            <h2>Modales</h2>
            <button onClick={openModal1}>Modal 1</button>
            <Modal isOpen={isOpenModal1} closeModal={closeModal1}>
                <h3>Modal 1</h3>
                <p>Este es el contenido de mi modal 1</p>
                <img src={"https://placeimg.com/400/400/animals"} alt={"animal"}/>
            </Modal>

            <button onClick={openModal2}>Modal 2</button>
            <Modal isOpen={isOpenModal2} closeModal={closeModal2}>
                <h3>Modal 2</h3>
                <p>lorem upson</p>
                <img src={"https://placeimg.com/400/400/nature"} alt={"nature"}/>
            </Modal>

            <button onClick={openModal3}>Modal Contacto</button>
            <Modal isOpen={isOpenContact} closeModal={closeContact}>
                <ContacForm/>
            </Modal>

            <button onClick={openModalSong}>Modal SongSearch</button>
            <Modal isOpen={isOpenSong} closeModal={closeSong}>
                <SongSearch/>
            </Modal>

            <button onClick={openModalPortal}>Modal en Portal</button>
            <ModalPortal isOpen={isOpenModal} closeModal={closePortal}>
                <h3>Modal en Portal </h3>
                <p>Este es el contenido de un portal qu ecaga en otro nodo del Dom deferente a donde carda cnuerta app
                    de react, gracias a un React Portal</p>
                <img src={"https://placeimg.com/400/400/nature"} alt={"nature"}/>
            </ModalPortal>
        </div>
    );
}

export default Modals;
