// const textInputs = ['name', 'command']
// const textAreas = ['text', 'success', 'mixed', 'fail']
// const [selectedGame, setSelectedGame] = useState("")
// const [customMove, setCustomMove] = useState(
//   {
//     name: "",
//     command: "",
//     roll: "",
//     text: "",
//     success: "",
//     mixed: "",
//     fail: ""
//   })


//     // const game = gameList.find(g => g.name === selectedGame)

//     <p>
//           Create a New Custom Move below:
//         </p>
//         <div>
//           Choose your PbtA game:
//           <select onChange={e=>setSelectedGame(e.target.value)}>
//           <option disabled selected value>  -- select game --  </option>
//             {gameList.map(x => 
//               <option 
//               value={x}>{x}</option>
//               )}
//           </select>
//           <div>you chose {selectedGame}</div>
//         </div>
//         {textInputs.map(x =>
//           <Inputs>
//             <Label>{x + ":"}</Label>
//             <input
//               value={customMove[x]}
//               name={x}
//               onChange={e =>
//                 setCustomMove({ ...customMove, [e.target.name]: e.target.value })}>
//             </input>
//           </Inputs>
//         )}
//         {textAreas.map(x =>
//           <Inputs>
//             <Label>{x + ":"}</Label>
//             <textarea
//               value={customMove[x]}
//               name={x}
//               onChange={e =>
//                 setCustomMove({ ...customMove, [e.target.name]: e.target.value })}>
//             </textarea>
//           </Inputs>
//         )}
//         <button onClick={() => navigator.clipboard.writeText(
//           `!newmove name+"${customMove.name}" command+"${customMove.command}" roll+"${customMove.roll}" text+"${customMove.text}" success+"${customMove.success}" mixed+"${customMove.mixed}" fail+"${customMove.fail}"`
//         )}>
//           Copy Move to Clipboard
//         </button>