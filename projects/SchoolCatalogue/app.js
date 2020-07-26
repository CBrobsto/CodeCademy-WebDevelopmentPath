class School {

    constructor(name, level, numberOfStudents) {
      this._name = name;
      if (level === 'primary') {
        this._level = 'primary';
      } else if (level === 'middle') {
        this._level = 'middle';
      } else if (level === 'high') {
        this._level = 'high';
      } else {
        this._level = 'unknown';
      }
      this._numberOfStudents = numberOfStudents;
    }
  
    get name() {
      return this._name;
    }
  
    get level() {
      return this._level;
    }
  
    get numberOfStudents() {
      return this._numberOfStudents;
    }
  
    set numberOfStudents(newNumber) {
      if (typeof newNumber === 'number') {
        this._numberOfStudents = newNumber;
      } else {
        console.log('Invalid input: numberOfStudents must be set to a Number.');
      }
    }
  
    quickFacts() {
      console.log(`${this.name} educates ${this.numberOfStudents} students at the ${this.level} school level.`)
    }
  
    static pickSubstituteTeacher(substituteTeachers) {
      let randomIndex = Math.floor(substituteTeachers.length * Math.random());
      return substituteTeachers[randomIndex];
    }
  } // End of School class
  
  class PrimarySchool extends School {
  
    constructor(name, numberOfStudents, pickupPolicy) {
      super(name, 'primary', numberOfStudents);
      this._pickupPolicy = pickupPolicy;
    } 
  
    get pickupPolicy() {
      return this._pickupPolicy;
    }
  } // End of Primary class
  
  class HighSchool extends School {
  
    constructor(name, numberOfStudents, sportsTeams) {
      super(name, 'high', numberOfStudents);
      this._sportsTeams = sportsTeams;
    }
  
    get sportsTeams() {
      return this._sportsTeams;
    }
  }
  
  /* Testing */
  const lorraineHansbury = new PrimarySchool('Lorraine Hansbury', 514, 'Students must be picked up by a parent, guardian, or a family member over the age of 13.');
  lorraineHansbury.quickFacts();
  
  const substitutes = ['Jamal Crawford', 'Lou Williams', 'J. R. Smith', 'James Harden', 'Jason Terry', 'Manu Ginobli'];
  console.log('Random substitute: ', School.pickSubstituteTeacher(substitutes));
  
  const alSmith = new HighSchool('Al E. Smith', 415, ['Baseball', 'Basketball', 'Volleyball', 'Track and Field']);
  console.log(alSmith.sportsTeams);
  