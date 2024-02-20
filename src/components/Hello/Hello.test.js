import React from 'react';
import { render } from '@testing-library/react';
import Hello from "./Hello";

describe(Hello, () => {
    it('renders the Hello Component', () => {
       const {getByTestId} = render(<Hello/>);
       const textValue = getByTestId("hello").textContent;
       expect(textValue).toBe("Hello World!");
    });
});