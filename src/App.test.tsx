import { userEvent } from "@testing-library/user-event";
import { expect } from "vitest";

import App from "./App";
import { renderProviders } from "./tests/utils";

describe("App", () => {
  it("renders counter", async () => {
    const { getByText } = renderProviders(<App />);
    const clicked0 = getByText("You haven't clicked yet");
    expect(clicked0).toBeInTheDocument();

    const user = userEvent.setup();
    await user.click(clicked0);
    const clicked1 = getByText("You have clicked 1 time");
    expect(clicked1).toBeInTheDocument();

    await user.click(clicked1);
    expect(getByText("You have clicked 2 times")).toBeInTheDocument();
  });
});
