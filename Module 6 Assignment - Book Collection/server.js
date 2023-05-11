const express =require('express');
const { parse } = require('ipaddr.js');

const app = express();
app.use(express.json()); 

//GET: Run index.html file
app.get('/', function(req, res){
    res.sendFile(__dirname + '/index.html');
})

//Empty Array of books
let books =[];

//GET: Show all books
app.get('/books',function(req, res){
    res.json(books);
})

// POST: Add a new book
app.post('/books',function(req,res){
    
    let bookObj = {
        "id" : req.body.id,
        "title"  : req.body.title,
        "author" : req.body.author,
        "publishedDate" : req.body.publishedDate
    }

    // Check for Title and Author
    if (!bookObj.title || !bookObj.author) {
      res.json({ error: 'Title and author are required' });
    } else {
      // Generate a unique ID for the book
      bookObj.id = Math.round(Math.random() * 1000);
      
      books.push(bookObj);
      res.json(bookObj);
    }  
})

//DELETE: Remove a book by id
app.delete('/books/:id',function(req,res){
    const id = parseInt(req.params.id);
    const bookIndex = books.findIndex(book=> book.id === id)
    if(bookIndex < 0){
        res.json({message: "Book not found"})
    }
    else{
        books.splice(bookIndex,1)
        res.json({message:"Book deleted successfully"})
    }
    
})

app.listen(5000, function(){
    console.log("Server started.")
})