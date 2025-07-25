import React, {useState} from "react";

const AddCategory = ({ onAdd, onclose }) => {
    const [categoryName, setCategoryName] = React.useState('');
    
    const handleSubmit = (e) => {
        e.preventDefault();
        if (categoryName.trim()) {
            onAdd(categoryName.trim());
            setCategoryName('');
            onclose();
        }
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg p-6 w-96 max-w-md mx-4">
                <h2 className="text-lg font-semibold mb-4">Add New Category</h2>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        value={categoryName}
                        onChange={(e) => setCategoryName(e.target.value)}
                        placeholder="Category Name"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 mb-4"
                        autoFocus
                    />
                    <div className="flex justify-end space-x-3">
                        <button
                            type="button"
                            onClick={onclose}
                            className="px-4 py-2 text-gray-600 hover:text-gray-800 transition-colors"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
                        >
                            Add Category
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddCategory;