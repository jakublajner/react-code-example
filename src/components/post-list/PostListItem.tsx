import { ListItem, ListItemButton, ListItemText, Typography } from "@mui/material";

import { paths } from "../../routes/paths";
import { Post } from "../../types/post";
import RouterLink from "../router-link/RouterLink";

export default function PostListItem({ post }: { post: Post }) {
  if (!post) {
    return null;
  }

  return (
    <ListItem key={post.id} alignItems="flex-start" data-testid="post-list-item">
      <ListItemButton
        component={RouterLink}
        href={paths.postDetail(post.id)}
        data-testid="post-list-item-link"
        style={{ padding: 0 }}
      >
        <ListItemText
          primary={post.title}
          primaryTypographyProps={{ typography: "subtitle", fontWeight: 600 }}
          secondary={
            <Typography
              sx={{ display: "inline" }}
              component="span"
              variant="body2"
              color="text.primary"
            >
              {post.body}
            </Typography>
          }
        />
      </ListItemButton>
    </ListItem>
  );
}
