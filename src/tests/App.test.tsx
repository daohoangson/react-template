import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { expect } from "vitest";

import App from "../App";

describe("App", () => {
  it("renders counter", async () => {
    const { getByText } = render(<App />);
    expect(getByText("count is 0")).toBeInTheDocument();

    const user = userEvent.setup();
    await user.click(getByText("count is 0"));
    expect(getByText("count is 1")).toBeInTheDocument();

    await user.click(getByText("count is 1"));
    expect(getByText("count is 2")).toBeInTheDocument();
  });
});
