import TaskCard from "./TaskCard";
function App() {
  return (
    <div className="max-w-6xl mx-auto p-4 bg-gray-100 rounded-md shadow-md ml-24">
    <h1 className="text-2xl font-bold mb-4">Smarter Tasks</h1>
    <div className="flex justify-between space-x-4">
      {/* Pending section */}
      <div className="w-1/2 bg-white p-4 rounded-md shadow-md">
        <h1 className="text-2xl font-semibold">Pending</h1><br></br>
        <TaskCard 
        title="Build Website with static content"
        status="pending"
        dueDate="10th April"
        assigneeName="Rohit S"
        /><br></br>
        <TaskCard 
        title="Add a blog"
        status="pending"
        dueDate="22nd March"
        assigneeName="Rohit M"
        />
      </div>
      {/* Done Section */}
      <div className="w-1/2 bg-white p-4 rounded-md shadow-md">
        <h1 className="text-2xl font-semibold">Done</h1><br></br>
        <TaskCard 
        title="Design the mockup"
        status="done"
        completedAtDate="10th April"
        assigneeName="Rohit M"
        /><br></br>
        <TaskCard 
        title="Get the approval from principal"
        status="done"
        completedAtDate="20th April"
        assigneeName="Ajay S"
        />
      </div>
    </div>
    </div>
);
}

export default App
