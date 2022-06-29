import React from 'react';
import styled from 'styled-components';

function Comment({ comment }) {
  return (
    <Container>
      <NickName>{comment.name}</NickName>
      <Contents>{comment.content}</Contents>
    </Container>
  );
}

export default Comment;

const Container = styled.div`
  display: flex;
`;

const NickName = styled.span`
  font-weight: bold;
  margin-right: 0.5rem;
  cursor: pointer;
`;

const Contents = styled.span``;
