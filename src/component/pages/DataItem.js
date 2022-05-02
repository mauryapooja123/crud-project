import React from "react";

export default function DataItem(props) {
  const { note } = props.note;
  return (
    <>
      <p>{note.email}</p>
    </>
  );
}
