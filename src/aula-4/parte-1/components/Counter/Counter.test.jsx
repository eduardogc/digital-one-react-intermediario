import React from 'react';
import Counter from './Counter';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { render, fireEvent } from '@testing-library/react'
import { initialState, counterReducer } from '../../../../redux/reducers/counter'

function renderWithRedux(
    ui,
    { initialState, store = createStore(counterReducer, initialState) } = {}
) {
    return {
        ...render(<Provider store={store}>{ui}</Provider>),
        store
    }
}

describe('Testando Counter', () => {
    it('O componente Counter deve renderizar corretamente', () => {
        const { getByTestId, getByText } = renderWithRedux(<Counter />)
        fireEvent.click(getByText('+'))
        expect(getByTestId('count-value').textContent).toBe('1')
    })
})