import {render, screen} from "@testing-library/react";

import {Options} from "../Options";

test("displays image for each scoop from server", async () => {
    render(<Options optionType="scoops"/>)

    const scoopImages = await screen.findAllByRole("img", {name: /scoop$/i})
    await expect(scoopImages).toHaveLength(2)

    const altText = scoopImages.map(({alt}) => alt)
    expect(altText).toEqual(["Chocolate scoop", "Vanilla scoop"])
})

test("displays image for each topping from server", async () => {
    render(<Options optionType="toppings"/>)

    const toppingImages = await screen.findAllByRole("img", {name: /topping$/i})
    await expect(toppingImages).toHaveLength(3)

    const altText = toppingImages.map(({alt}) => alt)
    expect(altText).toEqual(["Cherries topping", "M&Ms topping", "Hot fudge topping"])
})