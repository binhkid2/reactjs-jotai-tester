import { useAtom } from "jotai";
import { darkModeAtom } from "./store";


export default function AtomWithStorage() {
 
    const [darkMode, setDarkMode] = useAtom(darkModeAtom)
    const toggleDarkMode = () => setDarkMode(!darkMode)
 
 
    return (
   <>
   <h1>Welcome to {darkMode ? 'dark' : 'light'} mode!</h1>
      <button onClick={toggleDarkMode}>toggle theme</button>
   </>
  );
}