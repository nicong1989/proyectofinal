import React from 'react';
import MyVerticallyCenteredModal from './MyVerticallyCenteredModal';
import Button from 'react-bootstrap/Button';


const PruebaModal = () => {
    const [modalShow, setModalShow] = React.useState(false);

    return (
      <>
        <Button variant="primary" onClick={() => setModalShow(true)}>
          Launch vertically centered modal
        </Button>
  
        <MyVerticallyCenteredModal
          show={modalShow}
          onHide={() => setModalShow(false)}
        />
      </>
    );
}

export default PruebaModal