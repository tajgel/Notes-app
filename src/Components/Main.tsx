import { useState } from 'react'
import type { NoteType } from '../Types/NoteType'
import Footer from './Footer'
import Note from './Note'

function Main() {
  const [notes, setNotes] = useState<Array<NoteType>>()
  return (
    <div className='h-[80%] w-full bg-yellow-300'>
      <main className='flex h-full'>
        <div className='h-[85%] w-full bg-green-500'>
          <div className='h-[20%] w-full bg-amber-300'></div>
          <div className='w-full h-[80%] bg-green-800'>
            {notes?.map((note) => (
              <Note Note={note}/>
            ))}
          </div>
        </div>
        <Footer />
      </main>
    </div>
  )
}

export default Main