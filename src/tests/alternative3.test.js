import { render } from "@testing-library/react";
import Alternative3 from "../components/Alternative3";
import React from 'react'
import {checkEmailInput} from "../components/Alternative3"

describe("Component renders", () => {
  it("component renders", () => {
    render(<Alternative3 />);

    expect(document.querySelector("h1")).toHaveTextContent("Opprett bruker:");
    expect(document.querySelector("form")).toBeInTheDocument();
  });
});

describe("checkInputs", () => {
  const badName = "vy";
  const badEmail = "test.email";
  React.useState = jest
    .fn()
    .mockReturnValueOnce([badName, {}])
    .mockReturnValueOnce([badEmail, {}]);

  it("check Email Input", () => {
    checkEmailInput();
    const mocker = jest.fn()
    expect(mocker).toBeCalledWith(false)
});

});
