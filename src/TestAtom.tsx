import { useAtom } from "jotai";
import { textAtom, uppercaseAtom } from "./store";


// Use them anywhere in your app
const Input = () => {
    const [text, setText] = useAtom(textAtom)
    const handleChange = (e: { target: { value: string | ((prev: string) => string); }; }) => setText(e.target.value)
    return (
      <input value={text} onChange={handleChange} />
    )
  }
  const Uppercase = () => {
    const [uppercase] = useAtom(uppercaseAtom)
    return (
      <div>Uppercase: {uppercase}</div>
    )
  }
export default  function TestAtom() {
  return (
   <>
    <Input />
    <Uppercase />
   </>

  );
}