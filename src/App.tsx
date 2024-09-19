import ChecklistSection from "./components/ChecklistSection";
import { checklists } from "./inc/checklists";

function App() {
  return (
    <main className="bg-mmm-900 grid min-h-screen place-items-center p-8">
      <div className="container grid gap-4 lg:grid-cols-2">
        <h1 className="col-span-full text-center text-2xl font-bold text-white">
          MMM Proofreading Checklist
        </h1>
        {checklists.map((checklist) => {
          return <ChecklistSection {...checklist} />;
        })}
      </div>
    </main>
  );
}

export default App;
