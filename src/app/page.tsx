import { getData } from "@/api/api";
import AddTask from "@/components/AddTask";
import TodoList from "@/components/TodoList";

export default async function Home() {
  const tasks = await getData();
  return (
    <main className="w-full mx-auto mt-4">
      <div className="text-center flex flex-col gap-4">
        <h1 className="text-2xl font-bold">To-do List App</h1>
        <AddTask/>
        <div className="text-center">
          <TodoList tasks={tasks}/>
        </div>
      </div>
    </main>
  );
}
