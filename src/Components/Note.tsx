import { useState } from "react"
import type { NoteType } from "../Types/NoteType"
import { createPortal } from "react-dom"

type NoteProps = {
  Note: NoteType,
  editMode: boolean,
  close: Function,
  add: Function
}

function Note({ Note, editMode, close, add }: NoteProps) {
  return (
    <>
      {!editMode ?
        <div className="border-s-2">
          <button>
            <img />
          </button>
          <h2>{Note.header}</h2>
          <p>{Note.description}</p>
        </div>
        :
        createPortal(
          <div className="fixed top-0 left-0 w-screen h-screen z-[9999] flex justify-center items-center">
            <div className="z-9999 w-[500px] h-[500px] bg-white relative flex flex-col">
              <input placeholder="title" onChange={(event) => Note.header = event.target.value}/>
              <textarea placeholder="Type text here" onChange={(event) => Note.description = event.target.value}></textarea>
              <button onClick={() => close()} className="border-black border-1 rounded-xs
              hover:bg-gray-200 absolute bottom-[20px] right-[20px]">close</button>
            </div>
          </div>, document.body)
      }

    </>
  )
}

export default Note