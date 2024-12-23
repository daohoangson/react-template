import { screen } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
import { expect } from "vitest";

import App from "@/App";
import { renderProviders } from "@/tests/utils";

describe("App", () => {
  it("renders counter", async () => {
    renderProviders(<App />);
    const clicked0 = screen.getByText("You haven't clicked yet");
    expect(clicked0).toBeInTheDocument();

    const user = userEvent.setup();
    await user.click(clicked0);
    const clicked1 = screen.getByText("You have clicked 1 time");
    expect(clicked1).toBeInTheDocument();

    await user.click(clicked1);
    expect(screen.getByText("You have clicked 2 times")).toBeInTheDocument();
  });
});
