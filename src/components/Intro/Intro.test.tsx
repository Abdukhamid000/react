import { describe, it, expect, vi } from "vitest";
import { render } from "vitest-browser-react";
import { Intro } from "./Intro";

describe("Intro component", () => {
  it("renders without crashing", async () => {
    const result = await render(<Intro />);
    expect(result.container.querySelector("h1")).toBeInTheDocument();
    expect(result.container.querySelector("p")).toBeInTheDocument();
    expect(result.container.querySelector("button")).toBeInTheDocument();

    expect(result.getByText("Welcome to Quiz app")).toBeInTheDocument();
    expect(
      result.getByText("Test your knowledge with our interactive quiz!")
    ).toBeInTheDocument();
    expect(result.getByText("Start Quiz")).toBeInTheDocument();
  });

  it("should start quiz when button is clicked", async () => {
    const result = await render(<Intro />);
    const button = result.getByRole("button", { name: "Start Quiz" });
    expect(button).toBeInTheDocument();

    const clickSpy = vi.spyOn(button, "click");
    await button.click();

    expect(clickSpy).toHaveBeenCalled();
  });
});
