import "./Modal.css";
import styled from "styled-components";

const Row = styled.div`
  display: flex;
  flex-direction: row;
`;

type ModalProps = {
  open: boolean;
  close: () => void;
  header: string;
  children: React.ReactNode;
};

const Modal = ({ open, close, header, children }: ModalProps) => {
  return (
    // 모달이 열릴때 openModal 클래스가 생성된다.
    <div className={open ? "openModal modal" : "modal"}>
      {open ? (
        <section>
          <header>
            <Row></Row>
            {header}
            <button className="close" onClick={close}>
              {" "}
              &times;{" "}
            </button>
          </header>
          <main>{children}</main>
          <footer></footer>
        </section>
      ) : null}
    </div>
  );
};

export default Modal;
