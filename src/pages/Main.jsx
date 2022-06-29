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
      setData(info.items);
      setIsLoading(false);
    };
    getData();
  }, []);

  {
    isLoading ? (
      <div></div>
    ) : (
      <Container>
        {data.map((item, idx) => (
          <Feed key={idx} item={item} />
        ))}
      </Container>
    );
  }
}

export default Main;

const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
