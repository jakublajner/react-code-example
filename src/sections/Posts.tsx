import { Container, Stack, Typography } from "@mui/material";

import { PostList } from "../components/post-list";
import { useGetPostsQuery } from "../services/post";

const Posts = () => {
  const { data, error, isLoading } = useGetPostsQuery();

  return (
    <Container maxWidth="md" sx={{ my: 5 }}>
      <Stack spacing={3}>
        <Typography variant="h1" fontSize={24} fontWeight={600}>
          Posts
        </Typography>
        {error ? (
          <>Oh no, there was an error</>
        ) : isLoading ? (
          "Loading..."
        ) : data ? (
          <PostList data={data} />
        ) : (
          "No Data"
        )}
      </Stack>
    </Container>
  );
};

export default Posts;
