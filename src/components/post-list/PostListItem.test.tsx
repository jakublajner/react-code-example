import { cleanup, screen } from "@testing-library/react";

import { postListItemMock } from "../../mocks/post";
import { renderWithRouter } from "../../testUtils";
import PostListItem from "./PostListItem";

describe("PostListItem Component", () => {
  afterEach(() => {
    cleanup();
  });

  test("should not display post list item if post data is not provided", () => {
    renderWithRouter(<PostListItem post={null} />);
    expect(screen.queryByTestId("post-list-item")).not.toBeInTheDocument();
  });

  test("displays post list item", () => {
    renderWithRouter(<PostListItem post={postListItemMock} />);
    expect(screen.getByTestId("post-list-item")).toBeInTheDocument();
  });

  test("post list item should have correct link", () => {
    renderWithRouter(<PostListItem post={postListItemMock} />);
    expect(screen.getByTestId("post-list-item-link")).toHaveAttribute("href", "/posts/1");
  });
});
