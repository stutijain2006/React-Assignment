import React from 'react'

const SideBar = ({categories, selected, onSelect, onAddCategory}) => {
    return (
        <div className="w-64 bg-gray-50 border-r border-gray-200 flex flex-col h-screen">
            <div className="p-4 border-b border-gray-200">
                <h1 className="text-xl font-semibold text-gray-800">Notes</h1>
            </div>
            
            <div className="flex-1 p-4">
                <div className="space-y-2">
                    <div className="text-sm font-medium text-gray-600 mb-3">Categories</div>
                    <ul className="space-y-1">
                        {categories.map((category, index) => (
                            <li 
                                key={index} 
                                onClick={() => onSelect(category)}
                                className={`px-3 py-2 rounded-md cursor-pointer transition-colors text-sm ${
                                    selected === category 
                                        ? 'bg-blue-500 text-white' 
                                        : 'text-gray-700 hover:bg-gray-200'
                                }`}
                            > 
                                {category}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            
            <div className="p-4 border-t border-gray-200">
                <button 
                    onClick={onAddCategory}
                    className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors text-sm font-medium"
                >
                    + Add Category
                </button>
            </div>
        </div>
    );
};

export default SideBar;