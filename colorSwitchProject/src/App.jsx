
import { useState } from 'react'
import Button from './component/Button'
import ColorBox from './component/ColorBox'

function App() {
    
 const colors = ['pink', 'yellow', 'green', "orange", 'tomato', 'black']

 const [selectedColor, setSelectedcolor] = useState("white")

  return (
   <>
       
 <h1 className='font-bold flex justify-center items-center gap-10 m-[1.5rem] text-3xl'>Color Switcherr</h1> 

      <div className='flex flex-col items-center gap-10'>
      
     <ColorBox  color={selectedColor}/>
   </div>

   <div className='flex justify-center items-center gap-10 m-[1.5rem]'>
      {colors.map((items)=> (
      <Button key={items} 
      color={items} 
       set={setSelectedcolor}>
      {items}
      </Button>
   ))}
   </div>
   </>
)
}

export default App
