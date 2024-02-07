import {useState} from "react";

function HomePage(props){
const[list, setList] = useState(["ready", "set", "GO"]);
const[text, setText] = useState("");

  function onSubmit(event) {
    event.preventDefault();

    let newList = [...list, text];
    setList(newList);
    setText("");
  }
  return(     
    <div>
     <h1>Hello World</h1>
     <form onSubmit={onSubmit}>
         <input
           type="text"
           name="text"
           id="text"
           value={text}
           onChange={(event) => setText(event.target.value)}
         />
         <button type="submit">Add</button>
       </form>
       <ul>
         {list.map((item, idx) => {
           return <li key={item + idx}>{item}</li>;
         })}
       </ul>
    </div> 
   )
}
export default HomePage;

