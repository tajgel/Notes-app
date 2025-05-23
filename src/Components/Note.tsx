import { useState } from "react"
import type { NoteType } from "../Types/NoteType"

type NoteProps = {
  Note: NoteType
}

function Note({ Note }: NoteProps) {
  const [editMode, setEdiMode] = useState(false)
  return (
    <div>
      {!editMode ? 
        <div>
          <button>
            <img />
          </button>
          <h2>{Note.header}</h2>
          <p>{Note.description}</p>
        </div>
        :
        <div>
          <h1>EditMode</h1>
        </div>
      }
      
    </div>
  )
}

export default Note