import './App.css'

function App() {
  return (
    <div 
      style={{
        minHeight: '100vh',
        background: 'linear-gradient(to bottom right, #4f46e5, #a855f7, #ec4899)', // Strong indigo-purple-pink
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        padding: '1rem',
      }}
    >
      <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 drop-shadow-lg">
        Global Tax Calculator
      </h1>
      <p className="text-xl md:text-3xl text-white font-semibold drop-shadow">
        Live Gradient Fixed & Ready! 🚀
      </p>
    </div>
  )
}

export default App