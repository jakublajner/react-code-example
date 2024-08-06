import { lazy, Suspense } from "react";
import { ComponentType, ReactElement } from "react";

const Loadable =
  <P extends object>(Component: ComponentType<P>) =>
  (props: P): ReactElement => (
    <Suspense
      fallback={<div style={{ width: "100%", padding: 40, textAlign: "center" }}>Loading...</div>}
    >
      <Component {...props} />
    </Suspense>
  );

export const PostsPage = Loadable(lazy(() => import("../pages/Posts")));
export const PostDetailPage = Loadable(lazy(() => import("../pages/PostDetail")));
export const StatisticsPage = Loadable(lazy(() => import("../pages/Statistics")));
