import { useRoutes } from "react-router-dom";

import { PostDetailPage, PostsPage } from "./elements";

export default function Routes() {
  return useRoutes([
    {
      path: "/",
      children: [
        { element: <PostsPage />, index: true },
        { path: "posts/:id", element: <PostDetailPage /> },
        { path: "*", element: <div>Not found</div> },
      ],
    },
  ]);
}
