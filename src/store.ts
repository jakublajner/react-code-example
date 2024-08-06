import { configureStore } from "@reduxjs/toolkit";

import { postApi } from "./services/post";
import { userApi } from "./services/user";

export const store = configureStore({
  reducer: {
    [postApi.reducerPath]: postApi.reducer,
    [userApi.reducerPath]: userApi.reducer,
  },
  // adding the api middleware enables caching, invalidation, polling and other features of `rtk-query`
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(postApi.middleware, userApi.middleware),
});
