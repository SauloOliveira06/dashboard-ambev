import React from 'react';
import ReactLoading from 'react-loading';

import { Container } from './styles';

function Loading({ show }) {
  return (
    <>
      {show && (
        <Container>
          <ReactLoading type="bars" color="#5B81A7" width={50} />
        </Container>
      )}
    </>
  );
}

export default Loading;
