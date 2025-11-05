import "bootstrap/dist/css/bootstrap.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import App from "./App";
import "./index.css";

// QueryClient is the core object we use for managing and caching remote data in React Query.
// Then we need this to our component tree using our QueryClient provider

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // in this object, we set the default settings for our queries globally.
      // retry: 3,
      // cacheTime: 300_000, //5m
      // staleTime: 10 * 1000, // reactQuery automatically refreshes stale data under (1. Network is reconnected 2. Component is mounted 3.Window is refocused.)
      // When refetching if the data is stale, reactQuery will attempt to fetch new data from the backend while at the same time returning the stale data from the catch to the application.
      // Once we have updated data, react Query updated the cache and notifies our component that new data is available. Our component will rerender with fresh data.
      // refetchOnWindowFocus: true, (default)
      // refetchOnReconnect: true, (default)
      // refetchOnMount: true, (default)
    },
  },
});

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
      <ReactQueryDevtools />
    </QueryClientProvider>
  </React.StrictMode>
);
