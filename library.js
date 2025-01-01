
const myLibrary = [];



class Book  {

  constructor (name, author, page,year, read) {

this.name = name;
this.author = author;
this.page = page;
this.year = year;
this.read = read;
}
}

function addBookToLibrary() {

const bookone = new Book ("Hobbit", "J.R.R. Tolkien", "310", "1937", "Yes");

console.log(bookone.name); 

console.log(bookone.author);

console.log(bookone.page);

console.log(bookone.year);

console.log(bookone.read);

myLibrary.push(bookone);



const booktwo = new Book ("Dune", "Frank Herbert", "412" ,"1965", "Yes");

console.log(booktwo.name); 

console.log(booktwo.author);

console.log(booktwo.page);

console.log(booktwo.year);

console.log(booktwo.read);

myLibrary.push(booktwo);





const bookthree = new Book ("The Circle", "Dave Eggers", "504" ,"2013", "No");

console.log(bookthree.name); 

console.log(bookthree.author);

console.log(bookthree.page);

console.log(bookthree.year);

console.log(bookthree.read);

myLibrary.push(bookthree);





const bookfour = new Book ("Twilight", "Stephenie Meyer", "498","2005", "No");

console.log(bookfour.name); 

console.log(bookfour.author);

console.log(bookfour.page);

console.log(bookfour.year);

console.log(bookfour.read);

myLibrary.push(bookfour);


}

addBookToLibrary()




function display() {
     
      const bookDetails = document.querySelectorAll('div[data-index]');
      bookDetails.forEach(bookDetail => bookDetail.remove());
    
      for (let i = 0; i < myLibrary.length; i++) {
        let divElement = document.createElement("div");
        divElement.setAttribute('data-index', i);

        divElement.className = "book-div";
    
        document.body.appendChild(divElement);
    
        let pone = document.createElement("p");
        pone.className = "ponestyle";
        pone.textContent = myLibrary[i].name;
        divElement.appendChild(pone);
    
        let ptwo = document.createElement("p");
        ptwo.className = "ptwostyle";
        ptwo.textContent = myLibrary[i].author;
        divElement.appendChild(ptwo);
    
        let pthree = document.createElement("p");
        pthree.className = "pthreestyle";
        pthree.textContent = myLibrary[i].page;
        divElement.appendChild(pthree);
    
        let pfour = document.createElement("p");
        pfour.className = "pfourstyle";
        pfour.textContent = myLibrary[i].year;
        divElement.appendChild(pfour);
    
        let pfive = document.createElement("p");
        pfive.className = "pfivestyle";
        pfive.textContent = myLibrary[i].read;
        divElement.appendChild(pfive);
    
        const but = document.createElement("button");
        but.textContent = "Remove";
        but.setAttribute('data-index', i);
        divElement.appendChild(but);

       const space = document.createElement("br");
       space.setAttribute('data-index', i);
        divElement.appendChild(space);

        const space1 = document.createElement("br");
       space1.setAttribute('data-index', i);
        divElement.appendChild(space1);



        const read = document.createElement("button");
        read.textContent = "Read";
        read.setAttribute
        ('data-index', i);
        divElement.appendChild(read);
    
        but.addEventListener("click", (event) => {
          const index = event.target.dataset.index;
          myLibrary.splice(index, 1);
          display();
        });

        read.addEventListener("click", (event) => {
            let index = event.target.dataset.index;
        
            console.log(index);
        
            if (myLibrary[index].read === "Yes") {
                myLibrary[index].read = "No";
               
            } else {
                myLibrary[index].read = "Yes";
               
            }
        
            display();  
        });
        
        
        
        
      }
    }
    
    display();
    


const btn = document.querySelector(".mybutton");


const dialg = document.querySelector(".dio");



btn.addEventListener("click", () => {


      dialg.showModal();
      
        // Form codes
      
        const form = document.createElement("form");
      
        const flabel = document.createElement("label");
        
        flabel.setAttribute("for", "name");
        
        flabel.textContent = "Book Name: ";
        
        form.appendChild(flabel);
        
        const finput = document.createElement("input");
        
        finput.className = "firstinput";
        
        finput.setAttribute("type" , " text");
        
        finput.setAttribute("id" , " name");
        
        finput.setAttribute("name" , "name");
        
        finput.setAttribute("placeholder" , "Enter the book name");
        
        
        
        form.appendChild(finput);
        
        const brone = document.createElement("br");
        
        form.appendChild(brone);
        
        const slabel = document.createElement("label");
        
        
        slabel.setAttribute("for", "author");
        
        slabel.textContent = "Author: ";
        
        
        form.appendChild(slabel);
        
        const sinput = document.createElement("input");
        
        sinput.className = "secondinput";
        
        sinput.setAttribute("type" , " text");
        
        sinput.setAttribute("id" , " author");
        
        sinput.setAttribute("name" , "author");
        
        sinput.setAttribute("placeholder" , "Enter the author's name");
        
        
        
        form.appendChild(sinput);
        
        const brotwo = document.createElement("br");
        
        form.appendChild(brotwo);
        
        
        const tlabel = document.createElement("label");
        
        
        tlabel.setAttribute("for", "page");
        
        tlabel.textContent = "Page Number: ";
        
        form.appendChild(tlabel);
        
        const tinput = document.createElement("input");
        
        tinput.className = "thirdinput";
        
        tinput.setAttribute("type" , "text");
        
        tinput.setAttribute("id" , "page");
        
        tinput.setAttribute("name" , "page");
        
        tinput.setAttribute("placeholder" , "Enter the page number");
        
        
        form.appendChild(tinput);
        
        const brthree = document.createElement("br");
        
        form.appendChild(brthree);
        
        
        const folabel = document.createElement("label");
        
        
        folabel.setAttribute("for", "year");
        
        folabel.textContent = "Year: ";
        
        form.appendChild(folabel);
        
        const foinput = document.createElement("input");
        
        foinput.className = "fourthinput";
        
        foinput.setAttribute("type" , " text");
        
        foinput.setAttribute("id" , " year");
        
        foinput.setAttribute("name" , "year");
        
        foinput.setAttribute("placeholder" , "Enter the publication year");
        
        
        form.appendChild(foinput);
        
        const brfive = document.createElement("br");
        
        form.appendChild(brfive);
        
        //refactor start
        
        const filabel = document.createElement("label");
        
        
        filabel.setAttribute("for", "read");
        
        filabel.textContent = "Read? ";
        
        form.appendChild(filabel);
        
        const fiinput = document.createElement("input");
        
        fiinput.className = "fifthinput";
        
        fiinput.setAttribute("type" , " read");
        
        fiinput.setAttribute("id" , " read");
        
        fiinput.setAttribute("name" , "read");
        
        fiinput.setAttribute("placeholder" , "Has it been read?");
        
        
        form.appendChild(fiinput);
        
        const brsix = document.createElement("br");
        
        form.appendChild(brsix);
        
        //refactor ends
        
        
        const submit = document.createElement("button");
        
        submit.textContent = "Submit" ;
        
        submit.setAttribute("type", "submit");
        
        form.appendChild(submit);
      

      


dialg.appendChild(form);

submit.addEventListener("click", (event) => {
      event.preventDefault();
    
      const finputv = document.querySelector(".firstinput").value;
      const sinputv = document.querySelector(".secondinput").value;
      const tinputv = document.querySelector(".thirdinput").value;
      const foinputv = document.querySelector(".fourthinput").value;
      const fiinputv = document.querySelector(".fifthinput").value;
    
      const newbook = new Book(finputv, sinputv, tinputv, foinputv, fiinputv);

      myLibrary.push(newbook);
    
      dialg.close();
      display();
      dialg.textContent = "";
    });
    
});