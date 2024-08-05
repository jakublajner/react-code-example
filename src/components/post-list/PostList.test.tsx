import { cleanup, screen } from "@testing-library/react";

import { postListMock } from "../../mocks/post";
import { renderWithRouter } from "../../testUtils";
import PostList from "./PostList";

describe("PostList Component", () => {
  afterEach(() => {
    cleanup();
  });

  test("displays empty list message", () => {
    renderWithRouter(<PostList data={[]} />);
    expect(screen.getByTestId("post-list-empty")).toBeInTheDocument();
  });

  test("displays post list if array is not empty", () => {
    renderWithRouter(<PostList data={postListMock} />);
    expect(screen.getByTestId("post-list")).toBeInTheDocument();
  });

  test("displays all list items", () => {
    renderWithRouter(<PostList data={postListMock} />);
    expect(screen.getByTestId("post-list").children).toHaveLength(3);
  });
});
