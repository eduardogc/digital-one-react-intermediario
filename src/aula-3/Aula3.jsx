import React, { useState } from 'react';
import styled from 'styled-components';
import { Topico1 } from './Components/Topico1';
import Topico3 from './Components/Topico3/Topico3';

const ClassRoom = styled.div`
	display: flex;
	flex-direction: column;
`;

const ClassRoomControls = styled.div`
	display: flex;
	justify-content: space-around;
	margin: 10px 0;
`;

const ClassRoomBoard = styled.div`
	margin: 12px;
	display: flex;
	justify-content: center;
`;

const Aula3 = () => {
  const [topic, setTopic] = useState(1);

  return (
    <ClassRoom>
      <ClassRoomControls>
        <button onClick={() => setTopic(1)}>Tópico 1</button>
        <button onClick={() => setTopic(3)}>Tópico 3</button>
      </ClassRoomControls>
      <ClassRoomBoard>
        {topic === 1 && <Topico1 />}
        {topic === 3 && <Topico3 />}
      </ClassRoomBoard>
    </ClassRoom>
  );
}

export default Aula3;
