import { useRoutes } from "react-router-dom";

import { PostsPage } from "./elements";

export default function Routes() {
  return useRoutes([
    {
      path: "/",
      children: [
        { element: <PostsPage />, index: true },
        { path: "*", element: <div>Not found</div> },
      ],
    },
  ]);
}
