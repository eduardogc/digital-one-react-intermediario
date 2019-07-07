import React, { useState } from 'react';
import styled from 'styled-components';
import NameForm from './components/NameForm';
import SorveteForm from './components/SorveteForm';
import FileInput from './components/FileInput';
import FormikForm from './components/FormikForm';

const ClassRoom = styled.div`
	display: flex;
	flex-direction: column;
`;

const ClassRoomControls = styled.div`
	display: flex;
	justify-content: space-around;
	margin: 10px 0;
	background: #fefefe;
`;

const ClassRoomBoard = styled.div`
	margin: 12px;
	display: flex;
	justify-content: center;
`;

const Parte3 = () => {
	const [topic, setTopic] = useState(1);

	return (
		<ClassRoom>
			<ClassRoomControls>
				<button onClick={() => setTopic(1)}>Form 1</button>
				<button onClick={() => setTopic(2)}>Form 2</button>
				<button onClick={() => setTopic(3)}>Form 3</button>
				<button onClick={() => setTopic(4)}>Form 4</button>
			</ClassRoomControls>
			<ClassRoomBoard>
				{topic === 1 && <NameForm />}
				{topic === 2 && <SorveteForm />}
				{topic === 3 && <FileInput />}
				{topic === 4 && <FormikForm />}
			</ClassRoomBoard>
		</ClassRoom>
	);
}

export default Parte3;