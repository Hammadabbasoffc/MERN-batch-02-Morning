import { CheckIcon, EditIcon, TrashIcon } from "./Icons";
import { formatDate } from "../utils/formatDate";

const TaskCard = ({ task, onDelete, onEdit, onToggle }) => {
  return (
    <div
      className={`group bg-slate-900 border rounded-2xl overflow-hidden transition-all duration-200 hover:border-amber-400/30 hover:shadow-lg hover:shadow-amber-400/5 ${
        task.isCompleted ? "border-slate-800 opacity-70" : "border-slate-800"
      }`}
    >
      {task.image && (
        <div className="h-36 overflow-hidden">
          <img
            src={task.image}
            alt={task.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
      )}

      <div className="p-4">
        <div className="flex items-start justify-between gap-2 mb-2">
          <h3
            className={`font-semibold text-sm leading-snug ${
              task.isCompleted ? "line-through text-slate-500" : "text-white"
            }`}
          >
            {task.title}
          </h3>
          <span
            className={`shrink-0 text-xs px-2 py-0.5 rounded-full font-medium ${
              task.isCompleted
                ? "bg-emerald-500/15 text-emerald-400"
                : "bg-amber-400/10 text-amber-400"
            }`}
          >
            {task.isCompleted ? "Done" : "Active"}
          </span>
        </div>

        <p className="text-slate-400 text-xs leading-relaxed mb-3 line-clamp-2">
          {task.description}
        </p>

        <div className="flex items-center justify-between">
          <span className="text-slate-600 text-xs">
            {formatDate(task.createdAt)}
          </span>
          <div className="flex items-center gap-1">
            <button
              onClick={() => onToggle(task._id)}
              title={task.isCompleted ? "Mark Incomplete" : "Mark Complete"}
              className={`p-1.5 rounded-lg transition-all ${
                task.isCompleted
                  ? "text-slate-500 hover:text-amber-400 hover:bg-amber-400/10"
                  : "text-slate-500 hover:text-emerald-400 hover:bg-emerald-400/10"
              }`}
            >
              <CheckIcon />
            </button>
            <button
              onClick={() => onEdit(task)}
              title="Edit"
              className="p-1.5 rounded-lg text-slate-500 hover:text-blue-400 hover:bg-blue-400/10 transition-all"
            >
              <EditIcon />
            </button>
            <button
              onClick={() => onDelete(task._id)}
              title="Delete"
              className="p-1.5 rounded-lg text-slate-500 hover:text-red-400 hover:bg-red-400/10 transition-all"
            >
              <TrashIcon />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskCard;
