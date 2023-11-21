import React from 'react';
import Note from "./Note";
import Navbar from "./Navbar";
import Overlay from "./Overlay";

function App()
{
    const [notes, setNotes] = React.useState([]);
    const [panelVisible, setPanelVisible] = React.useState(false);

    function onDeleteNote(id)
    {
        console.log(id);
        setNotes(
            prevValue =>
            {
                return prevValue.filter((notes, index) =>
                {
                    return index != id;
                });
            }
        );
    }

    function onCreateNewNote(args)
    {
        setNotes(
        [
            ...notes,
            {
                title: args.title,
                text: args.text
            }
        ]);

        setPanelVisible(false);
    }

    function createNote(noteItem, index)
    {
        return <Note 
            key = {index}
            title = {noteItem.title}
            text = {noteItem.text}
            onDeleteNote = {() => onDeleteNote(index)}
        />
    }
    
    return <div>
        {
            panelVisible ?
            <Overlay 
                confirmButtonText = "Create"
                onActionButtonClick = {onCreateNewNote}
                onPanelClose = {() => setPanelVisible(false)}
            /> :
            null
        }
        <Navbar onAddNoteButtonClick = {() => setPanelVisible(true)}/>
        <div className="main-body">
            {notes.map(createNote)}
        </div>
    </div>
}

export default App;