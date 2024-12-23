// eslint-disable-next-line import/no-extraneous-dependencies, import/order
import { minimatch } from "minimatch";
// eslint-disable-next-line import/no-duplicates
import { render } from "@testing-library/react";
// eslint-disable-next-line import/no-duplicates
import { screen } from "@testing-library/react";
import React from "react";

import { Primary } from "./components/App.stories";
import { Component, notComponent } from "./tests/EslintReactRefresh";

describe("eslint", () => {
  test("js.configs.recommended", () => {
    // https://eslint.org/docs/latest/rules/no-debugger
    // eslint-disable-next-line no-debugger
    debugger;
    expect(true).toBeTruthy();
  });

  test("jsxA11y.flatConfigs.recommended", () => {
    // https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/HEAD/docs/rules/alt-text.md
    // eslint-disable-next-line jsx-a11y/alt-text
    const WithoutAltText = () => <img src="foo.jpg" />;
    render(<WithoutAltText />);
    expect(screen.getByRole("img")).toBeInTheDocument();
  });

  test("reactRefresh.configs.vite", () => {
    expect(Component).toBeTypeOf("function");
    expect(notComponent).toBeTypeOf("function");
  });

  test('testingLibrary.configs["flat/react"]', () => {
    const Component = () => <p>Foo</p>;
    const { getByText } = render(<Component />);

    // https://github.com/testing-library/eslint-plugin-testing-library/blob/main/docs/rules/prefer-screen-queries.md
    // eslint-disable-next-line testing-library/prefer-screen-queries
    expect(getByText("Foo")).toBeInTheDocument();
  });

  // eslint-disable-next-line vitest/expect-expect
  test("vitest.configs.recommended", () => {
    // https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/expect-expect.md
  });

  describe("eslint-plugin-import", () => {
    test("importConfigs.recommended", () => {
      // https://github.com/import-js/eslint-plugin-import/blob/HEAD/docs/rules/no-duplicates.md
      expect(render).toBeTypeOf("function");
      expect(screen).toBeTypeOf("object");
    });

    test("rules", () => {
      // https://github.com/import-js/eslint-plugin-import/blob/HEAD/docs/rules/no-extraneous-dependencies.md
      // https://github.com/import-js/eslint-plugin-import/blob/HEAD/docs/rules/order.md
      expect(minimatch).toBeTypeOf("function");
    });
  });

  test("react.configs.flat.recommended", () => {
    // https://github.com/jsx-eslint/eslint-plugin-react/blob/HEAD/docs/rules/display-name.md
    // eslint-disable-next-line react/display-name
    const WithoutDisplayName = React.memo(() => <p>Foo</p>);
    render(<WithoutDisplayName />);
    expect(screen.getByText("Foo")).toBeInTheDocument();
  });

  test("reactHooks.configs.recommended.rules", () => {
    const WithoutExhaustiveDeps: React.FC<React.PropsWithChildren> = ({
      children,
    }) => {
      React.useEffect(
        () => void expect(children).toBeTypeOf("string"),
        // eslint-disable-next-line react-hooks/exhaustive-deps
        [],
      );
      return children;
    };
    render(<WithoutExhaustiveDeps>Foo</WithoutExhaustiveDeps>);
    expect(screen.getByText("Foo")).toBeInTheDocument();
  });

  test('storybook.configs["flat/recommended"]', () => {
    // https://github.com/storybookjs/eslint-plugin-storybook/blob/main/docs/rules/no-redundant-story-name.md
    expect(Primary.name).toBe("Primary");
  });

  describe("typescript-eslint", () => {
    test("typescriptConfigs.recommendedTypeChecked", async () => {
      const foo = 1;
      // https://typescript-eslint.io/rules/await-thenable/
      // eslint-disable-next-line @typescript-eslint/await-thenable
      const bar = await foo;
      expect(bar).toBe(foo);
    });

    test("rules", () => {
      /** @deprecated */
      const deprecatedFunction = () => {};

      // https://typescript-eslint.io/rules/no-deprecated/
      // eslint-disable-next-line @typescript-eslint/no-deprecated
      expect(deprecatedFunction).toBeTypeOf("function");
    });
  });
});
