import React, { useState } from 'react';

interface ArrayEditorProps<T> {
    items: T[];
    onChange: (items: T[]) => void;
    renderItem: (item: T, index: number) => React.ReactNode;
    renderForm: (item: Partial<T>, onSave: (newItem: T) => void, onCancel: () => void) => React.ReactNode;
    newItemTemplate: Partial<T>;
    title?: string;
    addButtonLabel?: string;
}

function ArrayEditor<T extends { id?: string }>({
    items = [],
    onChange,
    renderItem,
    renderForm,
    newItemTemplate,
    title = "Items",
    addButtonLabel = "Add Item"
}: ArrayEditorProps<T>) {
    const [isAdding, setIsAdding] = useState(false);
    const [editingIndex, setEditingIndex] = useState<number | null>(null);

    const handleAddParam = (newItem: T) => {
        onChange([...items, { ...newItem, id: newItem.id || Date.now().toString() }]);
        setIsAdding(false);
    };

    const handleUpdate = (updatedItem: T) => {
        if (editingIndex === null) return;
        const newItems = [...items];
        newItems[editingIndex] = updatedItem;
        onChange(newItems);
        setEditingIndex(null);
    };

    const handleDelete = (index: number) => {
        if (window.confirm('Are you sure you want to delete this item?')) {
            onChange(items.filter((_, i) => i !== index));
        }
    };

    const moveItem = (index: number, direction: 'up' | 'down') => {
        if (
            (direction === 'up' && index === 0) ||
            (direction === 'down' && index === items.length - 1)
        ) return;

        const newItems = [...items];
        const swapIndex = direction === 'up' ? index - 1 : index + 1;
        [newItems[index], newItems[swapIndex]] = [newItems[swapIndex], newItems[index]];
        onChange(newItems);
    };

    return (
        <div className="space-y-4">
            <div className="flex items-center justify-between">
                <h3 className="text-lg font-bold text-slate-700">{title}</h3>
                {!isAdding && editingIndex === null && (
                    <button
                        type="button"
                        onClick={() => setIsAdding(true)}
                        className="btn-resin-secondary px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider flex items-center gap-2"
                    >
                        <span className="material-symbols-outlined text-sm">add</span> {addButtonLabel}
                    </button>
                )}
            </div>

            {isAdding && (
                <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 animate-fadeIn">
                    <h4 className="font-bold text-primary mb-4">New Item</h4>
                    {renderForm(newItemTemplate, handleAddParam, () => setIsAdding(false))}
                </div>
            )}

            <div className="space-y-3">
                {items.length === 0 && !isAdding && (
                    <p className="text-center py-8 text-slate-400 italic bg-slate-50 rounded-xl border border-dashed border-slate-200">No items found.</p>
                )}

                {items.map((item, index) => (
                    <React.Fragment key={index}>
                        {editingIndex === index ? (
                            <div className="bg-white p-6 rounded-2xl border-2 border-primary/10 shadow-lg animate-fadeIn relative z-10">
                                <h4 className="font-bold text-primary mb-4">Edit Item</h4>
                                {renderForm(item, handleUpdate, () => setEditingIndex(null))}
                            </div>
                        ) : (
                            <div className="bg-white p-4 rounded-xl border border-slate-100 shadow-sm flex items-center gap-4 group hover:border-primary/30 transition-all">
                                <div className="flex flex-col gap-1">
                                    <button type="button" onClick={() => moveItem(index, 'up')} disabled={index === 0} className="w-6 h-6 flex items-center justify-center rounded-full hover:bg-slate-100 text-slate-400 hover:text-primary disabled:opacity-30 transition-colors">
                                        <span className="material-symbols-outlined text-sm">keyboard_arrow_up</span>
                                    </button>
                                    <button type="button" onClick={() => moveItem(index, 'down')} disabled={index === items.length - 1} className="w-6 h-6 flex items-center justify-center rounded-full hover:bg-slate-100 text-slate-400 hover:text-primary disabled:opacity-30 transition-colors">
                                        <span className="material-symbols-outlined text-sm">keyboard_arrow_down</span>
                                    </button>
                                </div>

                                <div className="flex-1">
                                    {renderItem(item, index)}
                                </div>

                                <div className="flex items-center gap-2 opacity-100 sm:opacity-0 group-hover:opacity-100 transition-opacity">
                                    <button type="button" onClick={() => setEditingIndex(index)} className="w-8 h-8 flex items-center justify-center rounded-full bg-slate-50 text-slate-400 hover:bg-primary hover:text-white transition-colors">
                                        <span className="material-symbols-outlined text-xs">edit</span>
                                    </button>
                                    <button type="button" onClick={() => handleDelete(index)} className="w-8 h-8 flex items-center justify-center rounded-full bg-slate-50 text-slate-400 hover:bg-red-50 hover:text-red-500 transition-colors">
                                        <span className="material-symbols-outlined text-xs">delete</span>
                                    </button>
                                </div>
                            </div>
                        )}
                    </React.Fragment>
                ))}
            </div>
        </div>
    );
}

export default ArrayEditor;
