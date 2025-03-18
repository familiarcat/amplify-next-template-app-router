"use client";

import { useState, useEffect } from "react";
import { generateClient } from "aws-amplify/data";
import type { Schema } from "../amplify/data/resource";
import "./../app/app.css";
import { Amplify } from "aws-amplify";
import outputs from "@/amplify_outputs.json";
import "@aws-amplify/ui-react/styles.css";

Amplify.configure(outputs);

const client = generateClient<Schema>();

export default function App() {
  const [todos, setTodos] = useState<Array<Schema["Todo"]["type"]>>([]);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let subscription: { unsubscribe: () => void } | null = null;

    async function listTodos() {
      try {
        setIsLoading(true);
        // First, fetch existing todos
        const existingTodos = await client.models.Todo.list();
        setTodos(existingTodos.data);
        setIsLoading(false);

        // Then set up real-time subscription
        subscription = client.models.Todo.observeQuery().subscribe({
          next: ({ items }) => {
            setTodos(items);
            setError(null);
          },
          error: (err) => {
            console.error("Error in todo subscription:", err);
            setError("Unable to load todos. Please ensure the backend is deployed.");
            setIsLoading(false);
          },
        });
      } catch (err) {
        console.error("Error setting up subscription:", err);
        setError("Failed to connect to the backend. Please ensure the backend is deployed.");
        setIsLoading(false);
      }
    }

    listTodos();

    return () => {
      if (subscription) {
        subscription.unsubscribe();
      }
    };
  }, []);

  async function createTodo() {
    try {
      setError(null);
      const content = window.prompt("Todo content");
      if (!content) return;

      // Create the todo
      const newTodo = await client.models.Todo.create({
        content: content,
      });
      
      // No need for optimistic update since we have the actual todo with ID
      // The subscription will automatically update the UI
    } catch (err) {
      console.error("Error creating todo:", err);
      setError("Failed to create todo. Please ensure the backend is deployed.");
    }
  }

  return (
    <main className="p-4">
      <h1 className="text-2xl font-bold mb-4">My todos</h1>
      <button 
        onClick={createTodo}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 mb-4"
      >
        + new
      </button>

      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
          <p>{error}</p>
          <p className="text-sm mt-2">
            Try running: <code className="bg-gray-100 px-2 py-1">npx amplify sandbox</code>
          </p>
        </div>
      )}

      {isLoading ? (
        <div className="text-gray-600">Loading todos...</div>
      ) : (
        <ul className="space-y-2">
          {todos.map((todo) => (
            <li 
              key={todo.id}
              className="bg-gray-100 p-3 rounded"
            >
              {todo.content}
            </li>
          ))}
        </ul>
      )}

      <div className="mt-8 text-gray-600">
        🚀 To get started:
        <ol className="list-decimal ml-6 mt-2">
          <li>Run <code className="bg-gray-100 px-2 py-1">npx amplify sandbox</code></li>
          <li>Wait for the backend to deploy</li>
          <li>Refresh this page</li>
        </ol>
        <a 
          href="https://docs.amplify.aws/nextjs/start/quickstart/nextjs-app-router-client-components/"
          className="text-blue-500 hover:underline block mt-4"
        >
          Review next steps in the tutorial →
        </a>
      </div>
    </main>
  );
}
