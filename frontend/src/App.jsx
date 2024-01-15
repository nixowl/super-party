import './index.css'
import { Button } from "@/components/ui/button"

function App() {

  return (
    <>
      <header className="px-4 py-2 flex items-center justify-center">
        Header
      </header>

      <main className="flex-1 bg-red-500 flex items-center justify-center">
        Content and a button:<br />
        <Button>Test button</Button>
    </main>

    <footer className="px-4 py-2 flex items-center justify-center">
      Footer
     </footer>
    </>
  )
}

export default App
