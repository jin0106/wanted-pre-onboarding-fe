import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsis } from '@fortawesome/free-solid-svg-icons';

function Feed() {
  return (
    <Container>
      <Header>
        <UserInfo>
          <ProfileImg />
          <NickName>dlawlrma</NickName>
        </UserInfo>
        <MoreOptions icon={faEllipsis} />
      </Header>
      <div>사진, 좋아요 버튼</div>
      <div>좋아요 갯수, 컨텐츠, 작성시간, 댓글작성</div>
    </Container>
  );
}

export default Feed;

const Container = styled.div`
  border: 1px solid #000;
  width: 40rem;
  height: 100vh;
`;

const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  height: 4rem;
`;

const UserInfo = styled.div`
  display: flex;
  align-items: center;
`;

const ProfileImg = styled.img`
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  margin-right: 1rem;
`;

const NickName = styled.span`
  font-weight: bold;
`;

const MoreOptions = styled(FontAwesomeIcon)`
  width: 1.5rem;
  height: 1.5rem;
`;
