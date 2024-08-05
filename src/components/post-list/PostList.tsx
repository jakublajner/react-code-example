import { List, Typography } from "@mui/material";

import { Post } from "../../types/post";
import PostListItem from "./PostListItem";

export default function PostList({ data }: { data: Post[] }) {
  if (!data || !data.length) {
    return (
      <Typography data-testid="post-list-empty">No posts yet. Create your fist post...</Typography>
    );
  }

  return (
    <List sx={{ width: "100%", bgcolor: "background.paper", pt: 0 }} data-testid="post-list">
      {data.map((post: Post) => (
        <PostListItem key={post.id} post={post} />
      ))}
    </List>
  );
}
