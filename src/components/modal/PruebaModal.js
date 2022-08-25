import React from 'react';
import MyVerticallyCenteredModal from './MyVerticallyCenteredModal';
import Button from 'react-bootstrap/Button';
import { SiAddthis } from "react-icons/si";

const PruebaModal = () => {
    const [modalShow, setModalShow] = React.useState(false);

    return (
      <>
        <Button style={{backgroundColor:'black', border:'none'}} onClick={() => setModalShow(true)}>
        <SiAddthis />
        </Button>
  
        <MyVerticallyCenteredModal
          show={modalShow}
          onHide={() => setModalShow(false)}
        />
      </>
    );
}

export default PruebaModal