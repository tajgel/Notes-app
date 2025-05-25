import { useState } from 'react'
import type { NoteType } from '../Types/NoteType'
import Footer from './Footer'
import Note from './Note'
import { createPortal } from 'react-dom'

function Main() {
  const [notes, setNotes] = useState<Array<NoteType>>()
  const [showNoteEditOnAdd, setShowNoteEdit] = useState(false)
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [currentNote, setCurrentNote] = useState<NoteType>(
    {
    id: notes?.length ?? 0,
    header: title,
    description: description,
    icon: "",
    importancy: "Important"
  }
  )
  const exampleNote = {
    id: notes?.length ?? 0,
    header: "Title",
    description: "note",
    icon: undefined,
    importancy: undefined
  }

  function CreateNote() {
    setShowNoteEdit(true)
  }

  function AddNote() {
    setNotes(prev => [prev ?? [], currentNote].flat())
  }

  function CloseNote() {
    setShowNoteEdit(false)
  }
  console.log(notes)
  return (
    <div className='h-[80%] w-full bg-yellow-300'>
      <main className='flex h-full'>
        <div className='h-[85%] w-full bg-green-500'>
          <div className='h-[20%] w-full bg-amber-300'>
            <button onClick={CreateNote}>
              <img src='../../Icons/plus-icon.svg'/>
            </button>
          </div>
          <div className='w-full h-[80%] bg-green-800'>
            {notes !== undefined ? notes?.map((note) => (
              <Note Note={note} editMode={false} close={CloseNote} add={AddNote}/>
            ))
              :
              <h2 className='opacity-30 text-[10rem]'>Here are your notes!</h2>
            }
            {
              showNoteEditOnAdd && <Note Note={exampleNote} editMode={true} close={CloseNote} add={AddNote}/>
            }
          </div>
        </div>
        <Footer />
      </main>
    </div>
  )
}

export default Main