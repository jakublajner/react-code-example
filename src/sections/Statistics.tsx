import { Container, Stack, Typography } from "@mui/material";
import { useMemo } from "react";

import HorizontalBarChart from "../components/chart/HorizontalBarChart";
import { useGetPostsQuery } from "../services/post";
import { useGetUsersQuery } from "../services/user";
import { getLongestPostsPerUser } from "../utils/statistics";

const Statistics = () => {
  const { data: posts, error: postsError, isLoading: isLoadingPosts } = useGetPostsQuery();
  const { data: users, error: usersError, isLoading: isLoadingUsers } = useGetUsersQuery();

  const statsData = useMemo(() => {
    if (!posts || !users) {
      return [];
    }

    return getLongestPostsPerUser(posts, users);
  }, [posts, users]);

  return (
    <Container maxWidth="md" sx={{ my: 5 }}>
      <Stack spacing={3}>
        <Typography variant="h1" fontSize={24} fontWeight={600}>
          Statistics
        </Typography>

        {postsError || usersError ? (
          <>Oh no, there was an error</>
        ) : isLoadingPosts || isLoadingUsers ? (
          "Loading..."
        ) : statsData ? (
          <>
            <Typography variant="body1">
              The bar chart compares the lengths of posts written by each user, measured by the
              number of characters in their longest post. The horizontal axis (x-axis) lists the
              usernames, allowing viewers to identify individual contributors easily. The vertical
              axis (y-axis) indicates the number of characters, providing a clear scale for
              comparing the lengths of posts.
            </Typography>

            <HorizontalBarChart
              data={statsData}
              label="max post length"
              dataKeyY="postLength"
              dataKeyX="username"
            />
          </>
        ) : (
          "No Data"
        )}
      </Stack>
    </Container>
  );
};

export default Statistics;
