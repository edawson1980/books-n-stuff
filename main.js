//Parent class
class Media{
  constructor(title){
    this._title = title;
    this._isCheckedOut = false;
    this._ratings = [];
  }
  get title(){
    return this._title;
  }
  get isCheckedOut(){
    return this._isCheckedOut;
  }
  get ratings(){
    return this._ratings;
  }
  set isCheckedOut(status){
    this._isCheckedOut = status;
  }
  toggleCheckOutStatus(){
    this._isCheckedOut = !this._isCheckedOut;
  }
  //find average of ratings array:
  getAverageRating(){
    let sum = this.ratings.reduce(function(acc, rating){return acc + rating},0);
    //acc = accumulator (how much to add each iteration).  rating = the next value in the array.  0 = initial value (where to start from).
    let length = ratings.length;
    let avg = sum/length;
    return avg;
  }
  addRating(){
    this.ratings.push(newRating);
  }
};
//child of Media:
class Book extends Media{
  constructor(author, title, pages){
    //super pulls properties from parent class
    super(title);
    this._author = author;
    this._pages = pages;
  }
  get author(){
    return this._author;
  }
  get pages(){
    return this._pages;
  }
};
class Movie extends Media{
  constructor(director, title, runTime){
    super(title);
    this._director = director;
    this._runTime = runTime;
  }
  get director(){
    return this._director;
  }
  get runTime(){
    return this._runTime;
  }
};
//create new instance of Book class:
const historyOfEverything = new Book('Bill Bryson', 'A Short History of Nearly Everything', 544);
