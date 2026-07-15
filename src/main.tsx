import React from "react";
import ReactDOM from "react-dom/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import App from "./App";
import { RouterProvider } from "react-router-dom";
import router from "./routing/routes";

// QueryClient is the core object we use for managing and caching remote data in React Query.
// Then we need this to our component tree using our QueryClient provider

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // in this object, we set the default settings for our queries globally.

      // retry: 3,
      // How many times to retry a failed request

      // gcTime(formerly cacheTime in v5): 300_000, OR 5m
      // How long unused data stays in cache before being deleted

      // staleTime: 10 * 1000, // reactQuery automatically refreshes stale data under (1. Network is reconnected 2. Component is mounted 3.Window is refocused.)
      // When refetching if the data is stale, reactQuery will attempt to fetch new data from the backend while at the same time returning the stale data from the catch to the application.
      // Once we have updated data, react Query updated the cache and notifies our component that new data is available. Our component will rerender with fresh data.

      // refetchOnWindowFocus: true, (default)
      // Refetch when user returns to the tab

      // refetchOnReconnect: true, (default)
      // Refetch when internet reconnects

      // refetchOnMount: true, (default)
      // Refetch when component mounts (if data is stale)

      // enabled
      // Controls whether the query should run

      // refetchInterval: 1000, // Refetch every 1s
      // Auto refetch data every X milliseconds. This is useful for real-time data that changes frequently. You can also set this to a function that receives the latest data and returns the next refetch interval. This allows you to implement dynamic polling based on the data.

      // refetchIntervalInBackground: false, (default)
      // Continue refetching even when the app is in the background (e.g. when the user has switched to another browser tab). By default, React Query will pause refetching when the app is in the background to save resources, but you can enable this option if you want to keep refetching regardless of the app's visibility.

      // select: (data) => data.filter((todo) => !todo.completed), // Transform or filter the data before it's returned to your component. This is useful for deriving data or selecting a subset of the data without having to do it in your component. The select function receives the raw data from the query function and should return the transformed data that you want to use in your component.

      // placeholderData: [{ id: "1", title: "placeholder todo", completed: false }], // Placeholder data is used to provide an initial value for the query while the actual data is being fetched. This can help improve the user experience by showing something immediately instead of a loading state. Once the real data is fetched, it will replace the placeholder data in the cache and be returned to your component.

      // initialData: [{ id: "1", title: "initial todo", completed: false }], // Initial data is similar to placeholder data, but it is used as the initial value for the query when it is first created. This means that if there is no cached data for the query, it will start with the initial data instead of undefined. Once the real data is fetched, it will replace the initial data in the cache and be returned to your component.

      // keepPreviousData: true, // When changing query parameters, keep showing the previous data while fetching the new data. This is useful for maintaining a smooth user experience when navigating between different sets of data (e.g. paginated data) without showing a loading state.

      // networkMode: "online", // Only fetch when the browser is online. This is useful for preventing unnecessary fetch attempts when the user is offline, which can help improve performance and reduce errors. When set to "online", React Query will automatically check the browser's online status before attempting to fetch data, and will skip the fetch if the browser is offline.

    },
  },
});

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
     <RouterProvider router={router} />
      <ReactQueryDevtools />
    </QueryClientProvider>
  </React.StrictMode>
);
