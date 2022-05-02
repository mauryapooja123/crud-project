import { Table } from "@material-ui/core";
import React from "react";
import { useContext } from "react";
import { Button } from "react-bootstrap";
import GlobalContext from "../context/GlobalContext";

export default function TableData() {
  const context = useContext(GlobalContext);
  //const allData = useContext(GlobalContext);
  const { notes, deleteData } = context;

  // const { deleteData } = allData;

  return (
    <div>
      <h2> show data</h2>

      <table class="table">
        <thead>
          <tr>
            <th scope="col">email</th>
            <th scope="col">password</th>
          </tr>
        </thead>
        {notes.map((note) => (
          <tbody>
            <tr key={note.id}>
              <td>{note.email}</td>
              <td>{note.password}</td>

              <td>
                <Button type="submit" onClick={deleteData(note.id)}>
                  DELETE
                </Button>

                <Button type="submit">EDIT</Button>
              </td>
            </tr>
          </tbody>
        ))}
      </table>
    </div>
  );
}
