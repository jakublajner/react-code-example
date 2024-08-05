import { Container, Stack, Typography } from "@mui/material";

import { useGetPostByIdQuery } from "../services/post";

const PostDetail = ({ id }: { id: string | number }) => {
  const { data, error, isLoading } = useGetPostByIdQuery(id);

  return (
    <Container maxWidth="md" sx={{ my: 5 }}>
      {error ? (
        <>Oh no, there was an error</>
      ) : isLoading ? (
        "Loading..."
      ) : data ? (
        <Stack spacing={2}>
          <Typography variant="h1" fontSize={24} fontWeight={600}>
            {data.title}
          </Typography>
          <Typography variant="body2">{data.body}</Typography>
        </Stack>
      ) : (
        "No data"
      )}
    </Container>
  );
};

export default PostDetail;
