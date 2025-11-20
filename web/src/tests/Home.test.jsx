import { render, screen } from "@testing-library/react";
import Home from "../pages/Home";

describe("Home page", () => {
  it("renders the title", () => {
    render(<Home />);
    expect(screen.getByText("Lista de Alunos")).toBeInTheDocument();
  });
});
