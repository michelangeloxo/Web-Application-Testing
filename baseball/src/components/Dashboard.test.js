import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/react/cleanup-after-each';
import Controls from './Controls.js';

describe('<Controls />', () => {
    it('renders without crashing', () => {
        render(<Controls />);
    });
    it('strike', () => {
        let clicked = false;
        const { getByText } = render(<Controls strike={() => clicked = true} />);
        const strikeButton = getByText(/strike/i);
        fireEvent.click(strikeButton);
        expect(clicked).toBe(true);
    });
    it('strike w mocked function', () => {
        // let click = false;
        const click = jest.fn();
        const { getByText } = render(<Controls strike={click} />);
        const strikeButton = getByText(/strike/i);
        fireEvent.click(strikeButton);
        expect(click).toBeCalled();
    });
    it('ball w mocked function', () => {
        // let click = false;
        const click = jest.fn();
        const { getByText } = render(<Controls ball={click} />);
        const ballButton = getByText(/ball/i);
        fireEvent.click(ballButton);
        expect(click).toBeCalled();
    });
    it('foul w mocked function', () => {
        // let click = false;
        const click = jest.fn();
        const { getByText } = render(<Controls foul={click} />);
        const foulButton = getByText(/foul/i);
        fireEvent.click(foulButton);
        expect(click).toBeCalled();
    });
    it('hit w mocked function', () => {
        // let click = false;
        const click = jest.fn();
        const { getByText } = render(<Controls hit={click} />);
        const hitButton = getByText(/hit/i);
        fireEvent.click(hitButton);
        expect(click).toBeCalled();
    });
});