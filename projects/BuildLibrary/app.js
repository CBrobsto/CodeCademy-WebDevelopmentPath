class Media {

    constructor(title) {
      this._title = title;
      this._isCheckedOut = false;
      this._ratings = [];
    }
  
    get title() {
      return this._title;
    }
  
    get isCheckedOut() {
      return this._isCheckedOut;
    }
  
    get ratings() {
      return this._ratings;
    }
  
    set isCheckedOut(checkedOut) {
      this._isCheckedOut = checkedOut;
    }
  
    toggleCheckOutStatus() {
      this._isCheckedOut = !this._isCheckedOut;
    }
  
    getAverageRating() {
      const reducer = (sum, rating) => {
        return sum + rating;
      };
      let sumRatings = this._ratings.reduce(reducer, 0);
      let averageRating = sumRatings / this._ratings.length;
      return Math.round(10*averageRating)/10; // Nearest 10th
    }
  
    addRating(newRating) {
      this._ratings.push(newRating);
    }
  } // End of Media class
  
  class Book extends Media {
  
    constructor(title, author, pages) {
      super(title);
      this._author = author;
      this._pages = pages;
    }
  
    get author() {
      return this._author;
    }
  
    get pages() {
      return this._pages;
    }
  } // End of Book class
  
  class Movie extends Media {
  
    constructor(title, director, runTime) {
      super(title);
      this._director = director;
      this._runTime = runTime;
    }
  
    get director() {
      return this._director;
    }
  
    get runTime() {
      return this.runTime;
    }
  } // End of Movie class
  
  
  /* Testing */
  const historyOfEverything = new Book('A Short History of Nearly Everything', 'Bill Bryson', 544);
  historyOfEverything.toggleCheckOutStatus();
  console.log('Should be True: ', historyOfEverything.isCheckedOut);
  historyOfEverything.addRating(4);
  historyOfEverything.addRating(5);
  historyOfEverything.addRating(5);
  console.log('Should be 4.7: ', historyOfEverything.getAverageRating());
  
  const speed = new Movie('Speed', 'Jan de Bont', 116);
  speed.toggleCheckOutStatus();
  console.log('Should be True: ', speed.isCheckedOut);
  speed.addRating(1);
  speed.addRating(1);
  speed.addRating(5);
  console.log('Should be 2.3: ', speed.getAverageRating());
  