export type NoteType = {
  id :number,
  header :string,
  description :string,
  icon :string | undefined,
  importancy :"Very Important" | "Important" | undefined
}