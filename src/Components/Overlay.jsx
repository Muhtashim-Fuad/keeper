import React from 'react';

function Overlay(props)
{
    var noteTitle = "";
    var noteContent = "";

    function createNoteData()
    {
        props.onActionButtonClick(
          {
              title: noteTitle,
              text: noteContent
          }
        );
    }

    return <div className="overlay">
        <div className="overlay-content">
            <div className="overlay-input">
                <input 
                    type="text"
                    id="title-input"
                    name="title-input"
                    minLength={15}
                    maxLength={150}
                    placeholder="Enter Title"
                    className="overlay-input"
                    onChange = {(event) => noteTitle = event.target.value}>
                </input>
            </div>
            <div className="overlay-input">
                <textarea 
                        type="text"
                        id="text-input"
                        name="text-input"
                        minLength={15}
                        maxLength={350}
                        placeholder="Enter Description..."
                        className="overlay-input"
                        onChange = {(event) => noteContent = event.target.value}>
                </textarea>
            </div>
            <div className="overlay-button">
                <div type="button" onClick={props.onPanelClose}>Close</div>
                <div type="button" onClick={createNoteData}>{props.confirmButtonText}</div>
            </div>
        </div>
    </div>
}

export default Overlay;