import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import Input from "./Input";




describe("Render custom Input", () => {
    it("Render Input object", () => {
        const data = {
            name: 'nombre',
            type: 'text',
            value: 'textoss',
            action: () => { }
        };
        const component = render(
            <Input
                name={data.name}
                type={data.type}
                value={data.value}
                action={data.action}
            />
        );
        const input = component.getByDisplayValue(data.value);
        expect(input).toBeInTheDocument();
    });

    it("Render Multiple Input objects", () => {
        const multilpleData = [
            {
                name: 'nombre',
                type: 'text',
                value: 'Juan',
                action: () => { }
            },
            {
                name: 'apellido',
                type: 'text',
                value: 'Herrera',
                action: () => { }
            },
            {
                name: 'dni',
                type: 'number',
                value: '3',
                action: () => { }
            },

        ]
        for (let item of multilpleData) {
            render(
                <Input
                    name={item.name}
                    type={item.type}
                    value={item.value}
                    action={item.action}
                />
            )
            const input = screen.getByDisplayValue(item.value);
            expect(input).toBeInTheDocument();
        }
    })
});