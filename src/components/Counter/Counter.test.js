import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Counter from "./Counter";

describe(Counter, () => {
    it ('Counter display the correct initial count', () => {
        const { getByTestId } = render(<Counter initialCount={0}/>);
        const countValue = Number(getByTestId("count").textContent);
        expect(countValue).toEqual(0);
    });
    it ('Count Increament by 1 when cliked', () => {
        const { getByTestId, getByRole } = render(<Counter initialCount={0}/>);
        const IncreamentBtn = getByRole("button", {name: "Increament"});
        fireEvent.click(IncreamentBtn);
        const countValue = Number(getByTestId("count").textContent);
        expect(countValue).toEqual(1);
    });
    it ('Count Decreament by 1 when cliked', () => {
        const { getByTestId, getByRole } = render(<Counter initialCount={0}/>);
        const DecreamentBtn = getByRole("button", {name: "Decreament"});
        fireEvent.click(DecreamentBtn);
        const countValue = Number(getByTestId("count").textContent);
        expect(countValue).toEqual(-1);
    });
    it ('Count Switches Signs when clicked', () => {
        const { getByTestId, getByRole } = render(<Counter initialCount={5}/>);
        const switchSignBtn = getByRole("button", {name: "Switchsign"});
        fireEvent.click(switchSignBtn);
        const countValue = Number(getByTestId("count").textContent);
        expect(countValue).toEqual(-5);
    });
});