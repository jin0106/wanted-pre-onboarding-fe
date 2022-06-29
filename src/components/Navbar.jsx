import React from 'react';
import styled from 'styled-components';
import {
  faHouse,
  faInbox,
  faHeart,
  faArrowRightFromBracket,
} from '@fortawesome/free-solid-svg-icons';
import Icon from './Icon';
function Navbar() {
  const handleLogoutBtn = () => {
    localStorage.removeItem('userInfo');
    location.reload();
  };

  return (
    <Header>
      <MainContainer>
        <Container>
          <LogoImg src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/1280px-Instagram_logo.svg.png" />
          <Search placeholder="Search" />
          <IconContainer>
            <Icon icon={faHouse} />
            <Icon icon={faInbox} />
            <Icon icon={faHeart} />
            <Icon icon={faArrowRightFromBracket} onClick={handleLogoutBtn} />
          </IconContainer>
        </Container>
      </MainContainer>
    </Header>
  );
}

export default Navbar;

const Header = styled.nav`
  position: sticky;
  top: 0;
  width: 100%;
  height: 3.5rem;
  background-color: #fff;
  border-bottom: 1px solid rgb(219, 219, 219);
`;

const MainContainer = styled.div`
  display: flex;
  height: 100%;
  justify-content: center;
  align-items: center;
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 60rem;
`;

const IconContainer = styled.div``;

const LogoImg = styled.img`
  width: 5rem;
  height: 2.5rem;
`;

const Search = styled.input`
  height: 2rem;
  width: 13rem;
  border-radius: 0.5rem;
  background-color: rgb(239, 239, 239);
  padding-left: 0.5rem;
  @media ${(props) => props.theme.mobileXS} {
    display: none;
  }
`;
