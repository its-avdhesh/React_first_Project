import NoteContext from "./NoteContext";

const NoteState = (props) => {  // Add `props` as an argument
    const state = {
        "name": "Avdhesh",
        "class": "5b"
    };
    
    return (
        <NoteContext.Provider value={state}>
            {props.children}  {/* This allows child components to access context */}
        </NoteContext.Provider>
    );
};

export default NoteState;
