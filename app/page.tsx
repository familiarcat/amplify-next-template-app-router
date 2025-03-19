'use client';

import './../app/app.css';
import '@aws-amplify/ui-react/styles.css';

import {Amplify} from 'aws-amplify';
import {generateClient} from 'aws-amplify/data';
import {useState} from 'react';

import type {Schema} from '@/amplify/data/resource';

// Configure Amplify
Amplify.configure({
  API: {
    GraphQL: {
      endpoint: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000/graphql',
      region: process.env.NEXT_PUBLIC_REGION || 'us-east-1',
      defaultAuthMode: 'apiKey',
    }
  }
}, {
  ssr: true
});

type TodoType = Schema['Todo']['type'];
const client = generateClient<Schema>();

export default function App() {
  const [todos, setTodos] = useState<TodoType[]>([]);
  const [error, setError] = useState<string | null>(null);

  async function createTodo() {
    try {
      setError(null);
      const content = window.prompt('Todo content');
      if (!content) return;

      const optimisticTodo: TodoType = {
        id: `temp-${Date.now()}`,
        content,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      };

      setTodos(currentTodos => [...currentTodos, optimisticTodo]);

      const result = await client.models.Todo.create({content});

      if (!result?.data) {
        throw new Error('Failed to create todo');
      }

      const newTodo: TodoType = {
        id: result.data.id,
        content: result.data.content,
        createdAt: result.data.createdAt,
        updatedAt: result.data.updatedAt,
      };

      setTodos(currentTodos => 
        currentTodos.map(todo => 
          todo.id === optimisticTodo.id ? newTodo : todo
        )
      );
    } catch (error) {
      console.error('Error creating todo:', error);
      setError('Failed to create todo. Please ensure the backend is deployed.');
      
      setTodos(currentTodos => 
        currentTodos.filter(todo => todo.id?.startsWith('temp-') !== true)
      );
    }
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={createTodo}
          type="button">
          Create Todo
        </button>
        {error && <p className="text-red-500">{error}</p>}
        <ul>
          {todos.map(todo => (
            <li key={todo.id}>{todo.content}</li>
          ))}
        </ul>
      </div>
    </main>
  );
}
