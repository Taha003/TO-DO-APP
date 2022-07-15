console.log('Welcome!To notes app');
showNotes();


//To add text on clicking addnote button
addBtn = document.getElementById('addBtn').addEventListener
    ('click', function (e) {
        
        let addTxt = document.getElementById('addTxt');
        let notes = localStorage.getItem('notes');
        // let addTit=document.getElementsByClassName('title');
        

        if (notes == null) {
            notesObj = []
        }

        else {
            notesObj = JSON.parse(notes)
        }

        notesObj.push(addTxt.value)
        localStorage.setItem('notes', JSON.stringify(notesObj))
        addTxt = '';
        console.log(notesObj);
        showNotes();
    })




//To show the notes
    function showNotes() {
        let notes = localStorage.getItem('notes');

        if (notes == null) {
            notesObj = [];
        }

        else {
            notesObj = JSON.parse(notes)
        }
        let html = '';
        notesObj.forEach(function (element, index) {
            html += `
                <div class="noteCard card my-2 mx-2" style="width: 18rem;">
                <div class="card-body">
                <h5 class="card-title">Note ${index + 1}</h5>
                <p class="card-text">${element}</p>
                <a id='${index}' onclick='delNotes(this.id)' class="btn btn-primary">Delete note</a>
                </div>
        </div>`
        });

        let notesElem=document.getElementById('notes');
        if(notesObj.length!=0){
            notesElem.innerHTML=html;
        }

        else{
            notesElem.innerHTML=`Nothing to show! add notes above`
        };

    } 
//to delete the notes
    function delNotes(index){
        console.log('I am deleting notes',index)


        let notes=localStorage.getItem('notes')

        if(notes==null){
            notesObj=[]
        }

        else{
            notesObj=JSON.parse(notes)
        }
        notesObj.splice(index,1)
        localStorage.setItem('notes',JSON.stringify(notesObj))
        showNotes();
    }

//to search the notes
let search=document.getElementById('searchTxt')
search.addEventListener('input',function(){
    let addTxt=search.value.toLowerCase();
    // console.log('input event fired!',addTxt);
    
    let notecard=document.getElementsByClassName('noteCard');
    Array.from(notecard).forEach(function(element){
        let cardtxt=element.getElementsByTagName('p')[0].innerText;
        
        if(cardtxt.includes(addTxt)){
            element.style.display='block'
        }

        else{
            element.style.display='none'
        }
        // console.log(cardtxt);
    })

  
})








