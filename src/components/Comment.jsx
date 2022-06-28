import React from 'react';
import styled from 'styled-components';

function Comment({ props }) {
  return (
    <Container>
      <NickName>{props.writer}</NickName>
      <Contents>{props.comment}</Contents>
    </Container>
  );
}

export default Comment;

const Container = styled.div`
  display: flex;
  padding: 0.5rem 0;
`;

const NickName = styled.span`
  font-weight: bold;
  margin-right: 0.5rem;
`;

const Contents = styled.span``;
