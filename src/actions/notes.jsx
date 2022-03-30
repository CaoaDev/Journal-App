import Swal from "sweetalert2";
import { db } from "../firebase/firebase-config";
import { fileUpload } from "../helpers/fileUpload";
import { loadNotes } from "../helpers/loadNotes";
import { types } from "../types/types";

export const startNewNote = () => {
    return async ( dispatch, getState ) => {   
            const { uid } = getState().auth;
            const newNote = {
                title: '',
                body: '',
                date: new Date().getTime(),
            }
            
            const doc = await db.collection( `${ uid }/Journal/Notes` ).add( newNote );
            dispatch( activeNote( doc.id, newNote ) );
            dispatch( addNewNote( doc.id, newNote ) );
        }
};

export const activeNote = ( id, note ) => ({
    type: types.notesActive,
    payload: {
        id,
        ...note
    }
});

export const addNewNote = ( id, note ) => ({
    type: types.notesAddNew,
    payload: {
        id,
        ...note
    }
});

export const starLoadingNotes = ( uid ) => {
    return async ( dispatch ) => {
        const notes = await loadNotes( uid );
        dispatch( setNotes ( notes ) );
    }
};

export const setNotes = ( notes ) => ({
    type: types.notesLoad,
    payload: notes
});

export const startSaveNote = ( note ) => {
    return async ( dispatch, getState ) => {
        const { uid } = getState().auth;
        if ( !note.url ) {
            delete note.url;
        }
        const noteToFirestore = { ...note };
        delete noteToFirestore.id;

        await db.doc( `${ uid }/Journal/Notes/${ note.id }` ).update( noteToFirestore );
        dispatch( refeshNote( note.id, noteToFirestore ) );
        Swal.fire( 'Saved', 'Your note has been saved' , 'success' );
    }
};

export const refeshNote = ( id, note ) => ({
    type: types.notesUpdated,
    payload: {
        id,
        note: {
            id,
            ...note
        }
    }
});

export const startUploading = ( file ) => {
    return async ( dispatch, getState ) => {
        const { active } = getState().notes;
        Swal.fire({
            title: 'Uploading...',
            text: 'Please wait...',
            allowOutsideClick: false,
            didOpen: () => {
                Swal.showLoading()
            }
        });
        const fileUrl = await fileUpload( file );
        active.url = fileUrl;
        dispatch( startSaveNote( active ) );
        Swal.close();
    }
};

export const startDelete = ( id ) => {
    return async ( dispatch, getState ) => {
        const { uid } = getState().auth;
        await db.doc( `${ uid }/Journal/Notes/${ id }` ).delete();
        dispatch( deleteNote( id ) );
        Swal.fire( 'Deleted', 'Your note has been deleted', 'success' );
    }
};

export const deleteNote = ( id ) => ({
    type: types.notesDelete,
    payload: id
});

export const noteLogoutClean = () => ({
    type: types.notesLogoutClean
});