import { Post } from "../types/post";

export const postListItemMock: Post = {
  id: 1,
  userId: 1,
  title: "Title 1",
  body: "Body 1",
};

export const postListMock: Post[] = [
  { id: 1, userId: 1, title: "Title 1", body: "Body 1" },
  { id: 2, userId: 2, title: "Title 2", body: "Body 22" },
  { id: 3, userId: 3, title: "Title 3", body: "Body 333" },
];
