import React, { useState } from 'react';
import styled from 'styled-components';
import Estilos from './parte-1/Estilos';
import TodoListFunctional from './parte-2/TodoListFunctional';
import Parte3 from './parte-3/Parte3';

const ClassRoom = styled.div`
	display: flex;
	flex-direction: column;
`;

const ClassRoomControls = styled.div`
	display: flex;
	justify-content: space-around;
	margin: 0;
	background: #5f6aff;
	padding: 10px;
`;

const ClassRoomBoard = styled.div`
	margin: 12px;
	display: flex;
	justify-content: center;
`;

const Aula1 = () => {
	const [topic, setTopic] = useState(1);

	return (
		<ClassRoom>
			<ClassRoomControls>
				<button onClick={() => setTopic(1)}>Tópico 1</button>
				<button onClick={() => setTopic(2)}>Tópico 2</button>
				<button onClick={() => setTopic(3)}>Tópico 3</button>
			</ClassRoomControls>
			<ClassRoomBoard>
				{topic === 1 && <Estilos />}
				{topic === 2 && <TodoListFunctional />}
				{topic === 3 && <Parte3 />}
			</ClassRoomBoard>
		</ClassRoom>
	);
}

export default Aula1;
