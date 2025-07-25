import React from 'react'

const NoteCard = ({ note }) => {
    return (
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow">
            <div className="aspect-w-16 aspect-h-9 bg-gray-100">
                {note.image ? (
                    <img 
                        src={note.image} 
                        alt="Note" 
                        className="w-full h-32 object-cover"
                    />
                ) : (
                    <div className="w-full h-32 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                        <div className="text-gray-400 text-sm">No Image</div>
                    </div>
                )}
            </div>
            <div className="p-4">
                <h3 className="text-sm font-medium text-gray-800 mb-2">The Power of the Long Game</h3>
                <p className="text-xs text-gray-600 line-clamp-3">{note.text || "Lorem ipsum dolor sit amet, consectetur adipiscing elit..."}</p>
            </div>
            <div className="px-4 pb-4">
                <button className="w-full bg-blue-500 text-white py-1.5 px-3 rounded text-xs font-medium hover:bg-blue-600 transition-colors">
                    Add
                </button>
            </div>
        </div>
    );
};

export default NoteCard;