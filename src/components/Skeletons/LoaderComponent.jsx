import React from "react";
import { Loader, Modal } from "semantic-ui-react";

const LoaderComponent = () => {
  return (
    <Modal open basic size='mini'>
      <Loader active inverted content='Loading' />
    </Modal>
  );
};

export default LoaderComponent;
