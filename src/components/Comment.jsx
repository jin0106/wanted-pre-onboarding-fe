import React from 'react';
import styled from 'styled-components';
import NickName from './NickName';

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

const Contents = styled.span``;
