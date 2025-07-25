import React, { useState } from "react";

const AddNote = ({ onclose, onAdd }) => {
    const [text, setText] = useState("");
    const [image, setImage] = useState(null);

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (!file) return;

        const reader = new FileReader();
        reader.onload = () => {
            setImage(reader.result);
        };
        reader.readAsDataURL(file);
    };

    const handleSubmit = () => {
        if (text.trim() === "") return;
        onAdd({ text, image });
        setText("");
        setImage(null);
        onclose();
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter' && e.ctrlKey) {
            handleSubmit();
        }
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg p-6 w-96 max-w-md mx-4 max-h-[90vh] overflow-y-auto">
                <h2 className="text-lg font-semibold mb-4 text-gray-800">Add New Note</h2>
                
                <div className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Upload Image
                        </label>
                        <input
                            type="file"
                            onChange={handleImageChange}
                            accept="image/*"
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-medium file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                        />
                        
                        {image && (
                            <div className="mt-3">
                                <img 
                                    src={image} 
                                    alt="Preview" 
                                    className="w-full h-32 object-cover rounded-md border border-gray-200" 
                                />
                                <button
                                    onClick={() => setImage(null)}
                                    className="mt-2 text-xs text-red-600 hover:text-red-800 transition-colors"
                                >
                                    Remove image
                                </button>
                            </div>
                        )}
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Note Text
                        </label>
                        <textarea
                            value={text}
                            onChange={(e) => setText(e.target.value)}
                            onKeyPress={handleKeyPress}
                            placeholder="Enter your note here..."
                            rows="4"
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-none text-sm"
                        />
                        <p className="text-xs text-gray-500 mt-1">Press Ctrl + Enter to save quickly</p>
                    </div>

                    <div className="flex justify-end space-x-3 pt-4 border-t border-gray-200">
                        <button
                            onClick={onclose}
                            className="px-4 py-2 text-gray-600 hover:text-gray-800 transition-colors text-sm font-medium"
                        >
                            Cancel
                        </button>
                        <button
                            onClick={handleSubmit}
                            disabled={text.trim() === ""}
                            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors text-sm font-medium disabled:bg-gray-300 disabled:cursor-not-allowed"
                        >
                            Add Note
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddNote;