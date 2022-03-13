import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import Label from "./Label";




describe("Render custom Label", () => {
    it("Render Label object", () => {
        const data = {
            text: 'exampleLabel'
        };
        const component = render(
            <Label
                text={data.text}
            />
        );
        const label = component.getByText(data.text);
        expect(label).toBeInTheDocument();
    });

    it("Render Multiple Label objects", () => {
        const multilpleData = [
            {
                text: 'exampleLabel1'
            },
            {
                text: 'exampleLabel2'
            },
            {
                text: 'exampleLabel3'
            },

        ]
        for (let item of multilpleData) {
            render(
                <Label
                    text={item.text}
                />
            )
            const label = screen.getByText(item.text);
            expect(label).toBeInTheDocument();
        }
    })
});