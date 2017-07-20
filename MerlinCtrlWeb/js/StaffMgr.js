/* Merlin Control Panel 2017 */
/* 

Changelog:

30/06/2017 - Created


*/

function Staff() {
    this.UserID = 0;
    this.FirstName = "";
    this.LastName = "";
    this.LastLogin = "";
    this.Email = "";
    this.Password = "";
    this.Type = "";
    this.Active = 0;
    this.LoggedIn = false;
}

function Note() {
    this.NoteID = 0;
}


class StaffMgr {
    constructor() {

    }
    // Get all
    GetAll() {
        var notes = new Array();
        var note = new Note();

        notes.push(note);
        return notes
    }

    // Gets a single instance
    Get(id) {
        var note = new Note();


        if (note.id == id) {

        }

        return note;
    }

    // Create new
    Create(id, note) {

    }

    // Delete as single instance
    Delete(id) {
        if (id > 0) {

        }
    }
}
