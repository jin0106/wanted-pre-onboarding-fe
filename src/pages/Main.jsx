import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Feed from '../components/Feed';

function Main() {
  const [data, setData] = useState([]);

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
