import React from 'react';
import styled from 'styled-components';

// 3. Como estilizar uma lista usando styled-components.

const BlocoLista = styled.div`
	display: flex; 
	flex-direction: column; 
	justify-content: space-around;
	margin-left: 20px;
`;

const List = styled.ul`
	margin-top: 10px;
	border: 1px solid ${props => props.color || 'blue'};
  	padding: 25px;
`;

const ListItem = styled.li`
	color: #67000F;
`;

const Styled = () => (
	<BlocoLista>
		<p>Minha lista Styled Component</p>
		<List color="blue">
			<ListItem>Tomate</ListItem>
			<ListItem >Alface</ListItem>
			<ListItem>Melancia</ListItem>
		</List>
	</BlocoLista>
);

export default Styled;
