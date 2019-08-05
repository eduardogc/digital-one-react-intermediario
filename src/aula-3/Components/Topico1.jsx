import React, { useEffect, useState } from 'react'
import styled from 'styled-components';

const Topico1Block = styled.div`
  display: flex;
  flex-direction: column;
`;

const Item = styled.li`
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 12px;
  border: 1px solid #cecece;
`;

export const Topico1 = () => {
  const [cientistas, setCientistas] = useState([]);

  // Hook equivalente a componentDidMount()
  useEffect(() => {
    fetch('https://react-intermediario-dio.free.beeceptor.com/cientistas-brasileiras')
      .then(response => response.json())
      .then(data => {
        setCientistas(data)
      })
      .catch(error => {
        alert('Ops! Erro a seguir: ' + error);
      });
  }, []);

  return (
    <Topico1Block>
      <h1>Cientistas Brasileiras</h1>
      <ul>
        {cientistas.map((cientista, index) => (
          <Item key={index}>
            <div><b>nome:</b> {cientista.name}</div>
            <div><b>área:</b> {cientista.area}</div>
          </Item>
        ))}
      </ul>
    </Topico1Block>
  )
}