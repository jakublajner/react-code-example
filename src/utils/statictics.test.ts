import { postListMock } from "../mocks/post";
import { userListMock } from "../mocks/user";
import { getLongestPostsPerUser } from "./statistics";

describe("getLongestPostsPerUser", () => {
  test("returns empty array if posts are empty", () => {
    expect(getLongestPostsPerUser([], userListMock)).toEqual([]);
  });

  test("returns empty array if users are empty", () => {
    expect(getLongestPostsPerUser(postListMock, [])).toEqual([]);
  });

  test("returns correct data", () => {
    expect(getLongestPostsPerUser(postListMock, userListMock)).toEqual([
      {
        postLength: 6,
        username: "Username 1",
      },
      {
        postLength: 7,
        username: "Username 2",
      },
      {
        postLength: 8,
        username: "Username 3",
      },
    ]);
  });
});
