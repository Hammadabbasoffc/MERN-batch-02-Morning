import { useState } from "react";
import Input from "./Input";
import { XIcon, CheckIcon, ImageIcon } from "./Icons";

const TaskModal = ({ task, onClose, onSave }) => {
  const isEdit = !!task?._id;

  const [form, setForm] = useState({
    title: task?.title || "",
    description: task?.description || "",
    isCompleted: task?.isCompleted || false,
    image: task?.image || null,
  });
  const [imgPreview, setImgPreview] = useState(task?.image || null);

  const set = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }));

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setImgPreview(url);
      setForm((f) => ({ ...f, image: url }));
    }
  };

  const handleSave = () => {
    if (!form.title || !form.description) return;
    onSave({
      ...task,
      ...form,
      _id: task?._id || String(Date.now()),
      createdAt: task?.createdAt || new Date().toISOString(),
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-slate-950/80 backdrop-blur-sm"
        onClick={onClose}
      />

      <div className="relative bg-slate-900 border border-slate-800 rounded-2xl w-full max-w-lg shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-slate-800">
          <h2 className="font-bold text-white text-lg">
            {isEdit ? "Edit Task" : "New Task"}
          </h2>
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-white transition-colors p-1"
          >
            <XIcon />
          </button>
        </div>

        {/* Body */}
        <div className="p-6 flex flex-col gap-4">
          <Input
            label="Title"
            value={form.title}
            onChange={set("title")}
            placeholder="What needs to be done?"
          />

          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-semibold tracking-widest uppercase text-slate-400">
              Description
            </label>
            <textarea
              value={form.description}
              onChange={set("description")}
              placeholder="Add more details..."
              rows={3}
              className="w-full bg-slate-800/60 border border-slate-700 rounded-xl px-4 py-3 text-slate-100 placeholder-slate-500 text-sm focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400/30 transition-all resize-none"
            />
          </div>

          {/* Image upload */}
          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-semibold tracking-widest uppercase text-slate-400">
              Image (optional)
            </label>
            {imgPreview ? (
              <div className="relative rounded-xl overflow-hidden h-36">
                <img
                  src={imgPreview}
                  alt=""
                  className="w-full h-full object-cover"
                />
                <button
                  onClick={() => {
                    setImgPreview(null);
                    setForm((f) => ({ ...f, image: null }));
                  }}
                  className="absolute top-2 right-2 bg-slate-900/80 text-white rounded-full p-1 hover:bg-red-500 transition-colors"
                >
                  <XIcon />
                </button>
              </div>
            ) : (
              <label className="flex items-center gap-2 border border-dashed border-slate-700 rounded-xl px-4 py-3 text-slate-500 text-sm cursor-pointer hover:border-amber-400/50 hover:text-amber-400 transition-all">
                <ImageIcon />
                <span>Click to upload image</span>
                <input
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={handleImageChange}
                />
              </label>
            )}
          </div>

          {/* Completion toggle — only when editing */}
          {isEdit && (
            <label className="flex items-center gap-3 cursor-pointer">
              <div
                onClick={() =>
                  setForm((f) => ({ ...f, isCompleted: !f.isCompleted }))
                }
                className={`w-5 h-5 rounded-md border-2 flex items-center justify-center transition-all ${
                  form.isCompleted
                    ? "bg-amber-400 border-amber-400 text-slate-900"
                    : "border-slate-600 hover:border-amber-400"
                }`}
              >
                {form.isCompleted && <CheckIcon />}
              </div>
              <span className="text-slate-300 text-sm">Mark as completed</span>
            </label>
          )}
        </div>

        {/* Footer */}
        <div className="flex gap-3 p-6 pt-0">
          <button
            onClick={onClose}
            className="flex-1 border border-slate-700 text-slate-300 hover:text-white hover:border-slate-600 py-2.5 rounded-xl text-sm font-medium transition-all"
          >
            Cancel
          </button>
          <button
            onClick={handleSave}
            disabled={!form.title || !form.description}
            className="flex-1 bg-amber-400 hover:bg-amber-300 disabled:opacity-40 disabled:cursor-not-allowed text-slate-900 font-bold py-2.5 rounded-xl text-sm transition-all"
          >
            {isEdit ? "Save Changes" : "Create Task"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default TaskModal;
