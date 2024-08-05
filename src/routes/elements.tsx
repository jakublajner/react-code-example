import { lazy, Suspense } from "react";
import { ComponentType, ReactElement } from "react";

const Loadable =
  <P extends object>(Component: ComponentType<P>) =>
  (props: P): ReactElement => (
    <Suspense fallback={<>Loading...</>}>
      <Component {...props} />
    </Suspense>
  );

export const PostsPage = Loadable(lazy(() => import("../pages/Posts")));
export const PostDetailPage = Loadable(lazy(() => import("../pages/PostDetail")));
