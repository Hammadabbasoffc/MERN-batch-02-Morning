import { useState } from "react";
import Navbar from "../components/Navbar";
import StatsBar from "../components/StatsBar";
import TaskCard from "../components/TaskCard";
import TaskModal from "../components/TaskModal";
import { PlusIcon, CheckIcon } from "../components/Icons";
import { DUMMY_TASKS } from "../data/dummyData";

const FILTERS = ["all", "active", "done"];

const DashboardPage = ({ user, onLogout }) => {
  const [tasks, setTasks] = useState(DUMMY_TASKS);
  const [modal, setModal] = useState(null); // null | "create" | taskObj
  const [filter, setFilter] = useState("all");

  const total = tasks.length;
  const done = tasks.filter((t) => t.isCompleted).length;
  const active = total - done;

  const filtered = tasks.filter((t) => {
    if (filter === "active") return !t.isCompleted;
    if (filter === "done") return t.isCompleted;
    return true;
  });

  const handleSave = (task) => {
    setTasks((prev) => {
      const exists = prev.find((t) => t._id === task._id);
      if (exists) return prev.map((t) => (t._id === task._id ? task : t));
      return [task, ...prev];
    });
  };

  const handleDelete = (id) =>
    setTasks((prev) => prev.filter((t) => t._id !== id));

  const handleToggle = (id) =>
    setTasks((prev) =>
      prev.map((t) =>
        t._id === id ? { ...t, isCompleted: !t.isCompleted } : t,
      ),
    );

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* Background glow */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-60 -right-60 w-[500px] h-[500px] bg-amber-400/4 rounded-full blur-3xl" />
      </div>

      <Navbar user={user} onLogout={onLogout} />

      <main className="max-w-5xl mx-auto px-4 py-8">
        <StatsBar total={total} active={active} done={done} />

        {/* Filter + New Task row */}
        <div className="flex items-center justify-between mb-4 gap-3">
          <div className="flex gap-1 bg-slate-900 border border-slate-800 rounded-xl p-1">
            {FILTERS.map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold capitalize transition-all ${
                  filter === f
                    ? "bg-amber-400 text-slate-900"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                {f}
              </button>
            ))}
          </div>
          <button
            onClick={() => setModal("create")}
            className="flex items-center gap-2 bg-amber-400 hover:bg-amber-300 text-slate-900 font-bold px-4 py-2 rounded-xl text-sm transition-all"
          >
            <PlusIcon />
            <span>New Task</span>
          </button>
        </div>

        {/* Task grid */}
        {filtered.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-24 text-center">
            <div className="w-14 h-14 bg-slate-900 border border-slate-800 rounded-2xl flex items-center justify-center mb-4 text-slate-600">
              <CheckIcon />
            </div>
            <p className="text-slate-500 text-sm">No tasks here yet.</p>
            {filter === "all" && (
              <button
                onClick={() => setModal("create")}
                className="mt-3 text-amber-400 text-sm hover:underline"
              >
                Create your first task →
              </button>
            )}
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {filtered.map((task) => (
              <TaskCard
                key={task._id}
                task={task}
                onDelete={handleDelete}
                onEdit={(t) => setModal(t)}
                onToggle={handleToggle}
              />
            ))}
          </div>
        )}
      </main>

      {/* Modal */}
      {modal !== null && (
        <TaskModal
          task={modal === "create" ? null : modal}
          onClose={() => setModal(null)}
          onSave={handleSave}
        />
      )}
    </div>
  );
};

export default DashboardPage;
