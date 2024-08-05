import { Helmet } from "react-helmet-async";

import Posts from "../sections/Posts";

export default function PostsPage() {
  return (
    <>
      <Helmet>
        <title>Posts | Example App</title>
      </Helmet>

      <Posts />
    </>
  );
}
