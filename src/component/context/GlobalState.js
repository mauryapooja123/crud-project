import React from "react";
import { useState } from "react";
import GlobalContext from "./GlobalContext";
const GlobalState = (props) => {
  const notesInitial = [
    {
      userId: "788888888888888888888888888888",
      id: "677777777777777777",
      email: "sfacer reprehenderit",
      password: "architecto",
    },
  ];

  const [notes, setNotes] = useState(notesInitial);

  const addData = (email, password) => {
    const note = {
      userId: 1,
      id: 4,
      email: email,
      password: password,
    };

    setNotes(notes.concat(note));
  };
  const deleteData = (id) => {
    console.log("pppppppppp" + id);

    // const newNotes = notes.filter((note) => {
    //   return note.id !== id;
    // });
    // setNotes(newNotes);
  };

  return (
    <GlobalContext.Provider value={{ notes, setNotes, addData, deleteData }}>
      {props.children}
    </GlobalContext.Provider>
  );
};
export default GlobalState;
