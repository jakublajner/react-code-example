import { Helmet } from "react-helmet-async";
import { useParams } from "react-router-dom";

import PostDetail from "../sections/PostDetail";

export default function PostDetailPage() {
  const params = useParams();

  const { id } = params;

  return (
    <>
      <Helmet>
        <title>Post Detail | Example App</title>
      </Helmet>

      <PostDetail id={id} />
    </>
  );
}
