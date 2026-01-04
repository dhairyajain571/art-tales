import React, { useRef, useState } from 'react';

interface ImageUploadProps {
    value?: string;
    onChange: (value: string) => void;
    label?: string;
    className?: string;
}

const ImageUpload: React.FC<ImageUploadProps> = ({ value, onChange, label = "Upload Image", className = "" }) => {
    const fileInputRef = useRef<HTMLInputElement>(null);
    const [isProcessing, setIsProcessing] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file) return;

        if (!file.type.startsWith('image/')) {
            setError('Please select an image file.');
            return;
        }

        setIsProcessing(true);
        setError(null);

        const reader = new FileReader();
        reader.onload = (event) => {
            const img = new Image();
            img.onload = () => {
                const canvas = document.createElement('canvas');
                const MAX_WIDTH = 800; // Resize logic
                const MAX_HEIGHT = 800;
                let width = img.width;
                let height = img.height;

                if (width > height) {
                    if (width > MAX_WIDTH) {
                        height *= MAX_WIDTH / width;
                        width = MAX_WIDTH;
                    }
                } else {
                    if (height > MAX_HEIGHT) {
                        width *= MAX_HEIGHT / height;
                        height = MAX_HEIGHT;
                    }
                }

                canvas.width = width;
                canvas.height = height;
                const ctx = canvas.getContext('2d');
                ctx?.drawImage(img, 0, 0, width, height);

                // Compress to 0.7 quality jpeg
                const dataUrl = canvas.toDataURL('image/jpeg', 0.7);
                onChange(dataUrl);
                setIsProcessing(false);
            };
            img.src = event.target?.result as string;
        };
        reader.onerror = () => {
            setError('Failed to read file.');
            setIsProcessing(false);
        };
        reader.readAsDataURL(file);
    };

    const handleRemove = () => {
        onChange('');
        if (fileInputRef.current) fileInputRef.current.value = '';
    };

    return (
        <div className={`space-y-2 ${className}`}>
            <label className="block text-xs font-bold uppercase tracking-widest text-slate-500">{label}</label>

            {!value ? (
                <div
                    onClick={() => fileInputRef.current?.click()}
                    className="border-2 border-dashed border-slate-200 rounded-xl p-8 flex flex-col items-center justify-center cursor-pointer hover:border-primary/50 hover:bg-slate-50 transition-all group"
                >
                    {isProcessing ? (
                        <span className="material-symbols-outlined animate-spin text-3xl text-primary">autorenew</span>
                    ) : (
                        <>
                            <span className="material-symbols-outlined text-3xl text-slate-300 group-hover:text-primary mb-2 transition-colors">cloud_upload</span>
                            <span className="text-sm font-bold text-slate-400 group-hover:text-primary transition-colors">Click to Upload</span>
                            <span className="text-xs text-slate-300 mt-1">Max 800px optimization</span>
                        </>
                    )}
                </div>
            ) : (
                <div className="relative group rounded-xl overflow-hidden border border-slate-200 bg-slate-50 aspect-video flex items-center justify-center">
                    <img src={value} alt="Preview" className="max-w-full max-h-48 object-contain" />
                    <button
                        onClick={handleRemove}
                        className="absolute top-2 right-2 w-8 h-8 flex items-center justify-center bg-white/90 text-red-500 rounded-full shadow-md hover:bg-red-50 transition-colors opacity-0 group-hover:opacity-100"
                        title="Remove Image"
                    >
                        <span className="material-symbols-outlined text-sm">close</span>
                    </button>
                </div>
            )}

            <input
                type="file"
                ref={fileInputRef}
                onChange={handleFileChange}
                accept="image/*"
                className="hidden"
            />

            {error && <p className="text-xs text-red-500 font-bold mt-1">{error}</p>}
        </div>
    );
};

export default ImageUpload;
