import { Post } from "../types/post";
import { User } from "../types/user";

type PostData = { postLength: number; username: string };
const emptyStats: Record<number, PostData> = {};

export const getLongestPostsPerUser = (posts: Post[], users: User[]): PostData[] => {
  if (!posts.length || !users.length) {
    return [];
  }

  const groupedData = posts.reduce((acc, current) => {
    const userId = current.userId;
    if (acc[userId]) {
      if (acc[userId].postLength < current.body.length) {
        acc[userId] = { ...acc[userId], postLength: current.body.length };
      }
    } else {
      acc[userId] = {
        postLength: current.body.length,
        username: users.find((user) => user.id === userId).username,
      };
    }
    return acc;
  }, emptyStats);

  return Object.values(groupedData);
};
