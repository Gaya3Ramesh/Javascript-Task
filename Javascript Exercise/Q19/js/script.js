var library = [ 
    {
    author: 'Bill Gates',
    title: 'The Road Ahead',
    readingStatus: true,
    inStock:true
    },
    {
    author: 'Steve Jobs',
    title: 'Walter Isaacson',
    readingStatus: true,
    inStock: false
    
    },
    {
    author: 'Steve Jobs',
    title: "Thinking fast and slow",
    readingStatus: false,
    inStock: true
    
    },
    {
    author: 'Suzanne Collins',
    title:  'Mockingjay: The Final Book of The Hunger Games', 
    readingStatus: false,
    inStock: false
    },
    {
        libraryDetail: function(){
            return "Student Name: " + this.author + "<br>" + "Student Sclass: " +  this.title + "<br>" + "Student Rollno: " +  + this.readingStatus
        }
    }
    ];


document.write(library.libraryDetail());


    

    // if (this.readingStatus == true && this.inStock == true) {
    //     // myFunction.push(x);
    //     document.write(library.libraryDetail() + " Book is Available" + "<br>");
    //   } 
    // //   else if (x % 2 === 0) {
    // //     // myFunction.push(x);
    // //     document.write(x + " is even" + "<br>");
    // //   }
    // //   else {
    // //     // myFunction.push(x);
    // //     document.write(x + " is odd" + "<br>");
    // //   }