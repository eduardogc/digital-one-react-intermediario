import React from 'react';
import './ClassName.css';

// 2. Como estilizar uma lista usando classes css.

const ClassName = () => (
	<div className="bloco-lista">
		<p>Minha lista ClassName</p>
		<ul className="lista-estilizada">
			<li className="item-cor">Tomate</li>
			<li className="item-cor">Alface</li>
			<li className="item-cor">Melancia</li>
		</ul>
	</div>
);

export default ClassName;
