// if user add a note to local storage
let addBtn = document.getElementById('addBtn');
showNotes();

addBtn.addEventListener("click", function (e) {
    let addTxt = document.getElementById("addTxt")
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = []; 
    } else {
        notesObj = JSON.parse(notes);
    }

    notesObj.push(addTxt.value);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    addTxt.value = "";
    console.log(notesObj);

    showNotes();

});

function showNotes() {
    let notes = localStorage.getItem('notes');
    if (notes == null) {
        notesObj = [];
    } else {
        notesObj = JSON.parse(notes);
    }

    let html = "";
    notesObj.forEach(function (element, index) {
        html += `
        <div class="noteCard" style="width: 18rem;">
             <div class="card-body">
                 <h5 class="card-title">Note ${index + 1} </h5>
                 <p class="card-text">${element}</p>
                 <button id= "${index}" onclick= "dltNt(this.id)" class="btn btn-primary">Delet note</button>
             </div>
         </div>
        `
        let notesV = document.getElementById("notes");  
        if (notesObj.length != 0) {
            notesV.innerHTML = html;
        } else {
            notesV.innerHTML = "Nothing here, add something"
        }
    });
}

//delet note
function dltNt(index) {
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    } else {
        notesObj = JSON.parse(notes);
    }
    notesObj.splice(index, 1);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    showNotes();
}

// search notes from saved notes
let search = document.getElementById('searchTxt');
search.addEventListener("input", function(){

    let inputVal = search.value.toLowerCase();
    
    let noteCards = document.getElementsByClassName('noteCard');
    Array.from(noteCards).forEach(function(element){
        let cardTxt = element.getElementsByTagName("p")[0].innerText;
        if(cardTxt.includes(inputVal)){
            element.style.display = "block";
        }
        else{
            element.style.display = "none";
        }
        
    })
})
