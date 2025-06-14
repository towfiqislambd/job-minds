"use client";

import { useState } from "react";
import {
  useDemosQuery,
  useDemoQuery,
  useCreateDemoMutation,
  useUpdateDemoMutation,
  useDeleteDemoMutation,
} from "@/features/api/apiHooks";
import { Demo } from "@/types/api";
import toast from "react-hot-toast";

export default function Page() {
  const [selectedDemoId, setSelectedDemoId] = useState<number | undefined>(
    undefined
  );
  const {
    data: demos,
    error: demosError,
    isLoading: demosLoading,
  } = useDemosQuery();
  const { data: demo, error: demoError } = useDemoQuery(selectedDemoId);
  const createDemo = useCreateDemoMutation();
  const updateDemo = useUpdateDemoMutation();
  const deleteDemo = useDeleteDemoMutation();

  const handleCreate = () => {
    createDemo.mutate(
      { name: "New Demo", destination: "Paris", duration: 7 },
      {
        onSuccess: () => alert("Demo created!"),
        onError: (err: any) =>
          alert(
            `Error: ${
              typeof err.data === "string"
                ? err.data
                : err.message || JSON.stringify(err.data)
            }`
          ),
      }
    );
  };

  const handleUpdate = () => {
    if (selectedDemoId) {
      updateDemo.mutate(
        {
          id: selectedDemoId,
          name: "Updated Demo",
          destination: "Rome",
          duration: 10,
        },
        {
          onSuccess: () => alert("Demo updated!"),
          onError: (err: any) =>
            alert(
              `Error: ${
                typeof err.data === "string"
                  ? err.data
                  : err.message || JSON.stringify(err.data)
              }`
            ),
        }
      );
    }
  };

  const handleDelete = (id: number) => {
    deleteDemo.mutate(id, {
      onSuccess: () => toast.success("Demo deleted!"),
      onError: (err: any) =>
        toast.error(
          `Error: ${
            typeof err.data === "string"
              ? err.data
              : err.message || JSON.stringify(err.data)
          }`
        ),
    });
  };

  return (
    <div>
      <h1>Demos API</h1>

      <h2>All Demos (Public GET)</h2>
      {demosLoading && <p>Loading...</p>}
      {demosError && (
        <p>
          Error:{" "}
          {typeof demosError.data === "string"
            ? demosError.data
            : "Failed to load demos"}
        </p>
      )}
      <ul>
        {demos?.map((demo: Demo) => (
          <li key={demo.id}>
            {demo.name} ({demo.destination})
            <button onClick={() => setSelectedDemoId(demo.id)}>
              View Details
            </button>
            <button onClick={() => handleDelete(demo.id)}>Delete</button>
          </li>
        ))}
      </ul>

      {selectedDemoId && (
        <div>
          <h2>Demo Details (Private GET: ID {selectedDemoId})</h2>
          {demoError && (
            <p>
              Error:{" "}
              {typeof demoError.data === "string"
                ? demoError.data
                : "Failed to load demo"}
            </p>
          )}
          {demo && (
            <p>
              {demo.name} - {demo.destination} ({demo.duration} days)
            </p>
          )}
        </div>
      )}

      <div>
        <h2>Create Demo (Private POST)</h2>
        <button onClick={handleCreate} disabled={createDemo.isPending}>
          {createDemo.isPending ? "Creating..." : "Create New Demo"}
        </button>
        {createDemo.error && (
          <p>
            Error:{" "}
            {typeof createDemo.error.data === "string"
              ? createDemo.error.data
              : createDemo.error.message ||
                JSON.stringify(createDemo.error.data)}
          </p>
        )}
      </div>

      {selectedDemoId && (
        <div>
          <h2>Update Demo (Private PUT)</h2>
          <button onClick={handleUpdate} disabled={updateDemo.isPending}>
            {updateDemo.isPending ? "Updating..." : "Update Demo"}
          </button>
          {updateDemo.error && (
            <p>
              Error:{" "}
              {typeof updateDemo.error.data === "string"
                ? updateDemo.error.data
                : updateDemo.error.message ||
                  JSON.stringify(updateDemo.error.data)}
            </p>
          )}
        </div>
      )}
    </div>
  );
}

/*

Next.js 13+ Routing Guide (App Router) with folder structure:

1. Basic route:
/app/demo/page.tsx  --> Serves at route "/demo"

2. Nested route:
/app/demo/demo-details/page.tsx  --> Serves at route "/demo/demo-details"

3. Dynamic routes with parameters (like :id or :slug):
To create a dynamic route, create a folder with the parameter name wrapped in square brackets

Example:
/app/demo/[id]/page.tsx  --> Serves at route "/demo/:id"

Inside the page component for a dynamic route, you can access the param (id, slug, etc.) from the "params" prop:

Example:

```tsx
interface PageProps {
  params: {
    id: string;  // or slug: string;
  };
}

const DemoIdPage: React.FC<PageProps> = ({ params }) => {
  const { id } = params; // get the dynamic param value here

  return <div>Dynamic route with id: {id}</div>;
};

export default DemoIdPage;*/
