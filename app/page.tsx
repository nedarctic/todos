'use client'

import {
  useQuery,
  useMutation,
  useQueryClient
} from '@tanstack/react-query'
import {
  getTodos,
  postTodo
} from '@/lib/api'

export default function Todos() {
  const queryClient = useQueryClient()

  const {
    data: todos,
    isLoading
  } = useQuery({
    queryKey: ['todos'],
    queryFn: getTodos,
  })

  const mutation = useMutation({
    mutationFn: postTodo,
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ['todos'] }),
  })

  if (isLoading) return <p>Loading...</p>

  return (
    <div className="flex flex-col gap-4 items-center justify-center min-h-screen w-full p-4">
      <div className="flex flex-col gap-4 items-start">
        <h1 className='font-bold text-2xl'>Todos</h1>
        <ul className="list-disc">
          {todos?.map((todo) => (
            <li key={todo.id}>{todo.title}</li>
          ))}
        </ul>
        <button
          className="px-4 py-2 bg-amber-500 text-black rounded"
          onClick={() =>
            mutation.mutate({
              id: Date.now(),
              title: 'Do Laundry',
            })
          }
        >
          Add Todo
        </button>
      </div>
    </div>
  )
}