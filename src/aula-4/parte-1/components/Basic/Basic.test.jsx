import React from 'react';
import Basic from './Basic';
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect';

describe('Testando Basic', () => {
    it('O componente Basic deve renderizar corretamente', () => {
        const { baseElement } = render(<Basic name="Lilith" />);
        expect(baseElement).toHaveTextContent('Meu nome é Lilith');
    })
})
