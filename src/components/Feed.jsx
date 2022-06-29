import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsis } from '@fortawesome/free-solid-svg-icons';
import {
  faBookmark,
  faComment,
  faHeart,
  faMessage,
  faSmile,
} from '@fortawesome/free-regular-svg-icons';
import Comment from './Comment';

function Feed({ item }) {
  const [comment, setComment] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [isDisabled, setIsDisabled] = useState(true);
  const { writer, profileImage, image, content, likes, comments } = item;

  const changeHandler = (e) => {
    setComment(e.target.value);
    e.target.value.trim().length > 0
      ? setIsDisabled(false)
      : setIsDisabled(true);
  };

  useEffect(() => {
    const img = new Image();
    img.src = image;
    img.onload = () => {
      setIsLoading(false);
    };
  }, []);

  const onSubmitHandler = (e) => {
    e.preventDefault();
  };

  return isLoading ? (
    <div></div>
  ) : (
    <Container>
      <Header>
        <UserInfo>
          <ProfileImg src={profileImage} />
          <NickName>{writer}</NickName>
        </UserInfo>
        <Icon icon={faEllipsis} />
      </Header>
      <PhotoSection>
        <Photo src={image} onLoad={() => setIsLoading(false)} />
        <IconContainer>
          <BookMark>
            <Icon icon={faHeart} margin="true" />
            <Icon icon={faComment} margin="true" />
            <Icon icon={faMessage} margin="true" />
          </BookMark>
          <Icon icon={faBookmark} />
        </IconContainer>
      </PhotoSection>
      <ArticleInfo>
        <Likes>{likes} likes</Likes>
        <ContentsContainer>
          <NickName>{writer}</NickName>
          <Contents>{content}</Contents>
        </ContentsContainer>
      </ArticleInfo>
      {comments.map((value, index) => (
        <Comment comment={value} key={index} />
      ))}
      <CreateComment onSubmit={onSubmitHandler}>
        <Icon icon={faSmile} margin="true" />
        <CommentInput onChange={changeHandler} />
        <PostBtn
          disabled={isDisabled}
          disable={isDisabled}
          onClick={onSubmitHandler}
        >
          Post
        </PostBtn>
      </CreateComment>
    </Container>
  );
}

export default Feed;

const Container = styled.div`
  border: 1px solid ${(props) => props.theme.borderColor};
  border-radius: 0.4rem;
  width: 30rem;
  padding: 0 1rem;
  margin-bottom: 1rem;
  @media ${(props) => props.theme.mobileXS} {
    width: 100%;
  }
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
  margin-right: 0.5rem;
`;

const Icon = styled(FontAwesomeIcon)`
  width: 1.5rem;
  height: 1.5rem;
  margin-right: ${({ margin }) => (margin ? '1rem' : '0')};
`;

const PhotoSection = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Photo = styled.img`
  width: 30rem;
  max-height: 70rem;
  @media ${(props) => props.theme.mobileXS} {
    width: 100%;
  }
`;

const IconContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 0;
`;

const BookMark = styled.div``;

const ArticleInfo = styled.section`
  display: flex;
  flex-direction: column;
  padding: 0.5rem 0;
`;

const Likes = styled.span`
  font-weight: bold;
  margin-bottom: 0.5rem;
`;

const ContentsContainer = styled.div``;
const Contents = styled.span``;

const CreateComment = styled.form`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 3rem;
  border-top: 1px solid ${(props) => props.theme.borderColor};
`;

const CommentInput = styled.input`
  padding: 0.5rem 0;
  width: 37rem;
  height: 100%;
`;

const PostBtn = styled.button`
  color: ${({ disabled }) =>
    disabled ? 'rgb(178, 223, 252);' : 'rgb(17,156,247)'};
  font-size: 1.1rem;
  font-weight: bold;
  background-color: #fff;
  cursor: ${({ disable }) => (disable ? 'default' : 'pointer')};
`;
