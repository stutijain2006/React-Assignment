import React from 'react'
import SideBar from './components/SideBar'
import NoteCard from './components/NoteCard'
import AddNote from './components/AddNote'
import AddCategory from './components/AddCategory'
import "./output.css"

const App = () => {
  const [categories, setCategories] = React.useState([]);
  const [selectedCategory, setSelectedCategory] = React.useState(null);
  const [notes, setNotes] = React.useState({});
  const [showAddCategory, setShowAddCategory] = React.useState(false);
  const [showAddNote, setShowAddNote] = React.useState(false);

  const handleAddCategory = (category) => {
    if (!categories.includes(category)) {
      setCategories([...categories, category]);
      setNotes((prev) => ({ ...prev, [category]: [] }));
      setSelectedCategory(category);
    }
  };

  const handleAddNote = (note) => {
    if (!selectedCategory) return;
    setNotes(prev => ({
      ...prev,
      [selectedCategory]: [...(prev[selectedCategory] || []), note]
    }))
  }

  return (
    <div className="flex min-h-screen bg-gray-100">
      <SideBar
        categories={categories}
        selected={selectedCategory}
        onSelect={setSelectedCategory}
        onAddCategory={() => setShowAddCategory(true)} 
      />

      <div className="flex-1 p-8">
        <div className="mb-6">
          <h1 className="text-2xl font-semibold text-gray-800 mb-2">Saved Notes</h1>
          {selectedCategory ? (
            <p className="text-gray-600">Category: {selectedCategory}</p>
          ) : (
            <p className="text-gray-600">Please add a category to begin</p>
          )}
        </div>
        
        {selectedCategory ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {(notes[selectedCategory] || []).map((note, index) => (
              <NoteCard key={index} note={note} />
            ))}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 border-dashed hover:border-gray-300 transition-colors">
              <button 
                onClick={() => setShowAddNote(true)} 
                className="w-full h-full min-h-[250px] flex flex-col items-center justify-center text-gray-500 hover:text-gray-700 transition-colors p-6"
              >
                <div className="w-12 h-12 border-2 border-gray-300 rounded-full flex items-center justify-center mb-3">
                  <span className="text-2xl">+</span>
                </div>
                <span className="text-sm font-medium">Add Note</span>
              </button>
            </div>
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No category selected</p>
          </div>
        )}
      </div>

      {showAddCategory && (
        <AddCategory 
          onAdd={handleAddCategory} 
          onclose={() => setShowAddCategory(false)} 
        />
      )}
      {showAddNote && (
        <AddNote 
          onAdd={handleAddNote} 
          onclose={() => setShowAddNote(false)} 
        />
      )}
    </div>
  )
}

export default App