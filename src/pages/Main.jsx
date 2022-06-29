import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Feed from '../components/Feed';

function Main() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      const res = await fetch('./data/database.json');
      const info = await res.json();
      setIsLoading(false);
      setData(info.items);
    };
    getData();
  }, []);

  const writeComment = (idx, name, content) => {
    data.map((item) =>
      item.index === idx ? item.comments.push({ name, content }) : null
    );
  };
  return isLoading ? (
    <div></div>
  ) : (
    <Container>
      {data.map((item, idx) => (
        <Feed key={idx} item={item} writeComment={writeComment} />
      ))}
    </Container>
  );
}

export default Main;

const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
