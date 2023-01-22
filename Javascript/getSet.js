class Book {
    constructor (author) {
      this._author = author;
    }
  
    get yazar () {
      return this._author;
    }
    set yazar (yeniYazar) {
      this._author = yeniYazar;
    }
  
  }
  
  const newBook = new Book("İsimsiz");
  console.log(newBook);
  newBook.yazar = "Yusuf";
  console.log(newBook.yazar);
  console.log(newBook);
  
  newBook.splice()