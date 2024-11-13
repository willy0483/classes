export class User {
  constructor(firstName, LastName, email, birthYear, position, gender) {
    this.firstName = firstName;
    this.LastName = LastName;
    this.email = email;
    this.birthYear = birthYear;
    this.position = position;
    this.gender = gender;
  }
  present() {
    console.log(
      `Brugeroplysninger: Fornavn: ${this.firstName}, Efternavn: ${this.LastName}, Email: ${this.email}, Fødselsår: ${this.birthYear}, Stilling: ${this.position}, Køn: ${this.gender}`
    );
  }
}

export class Greeting {
  constructor(name, LastName) {
    this.name = name;
    this.LastName = LastName;
  }
  present() {
    console.log(`Hej jeg hedder ${this.name} ${this.LastName}`);
  }
}

export class Year {
  constructor(year) {
    this.year = year;
  }
  present() {
    console.log(`Årstal: ${this.year}`);
  }
}

export class Paycard {
  constructor(fullName, email, position) {
    this.fullName = fullName;
    this.email = email;
    this.position = position;
  }
  present() {
    console.log(
      `Betalingskort: Fornavn og Efternavn: ${this.fullName}, Email: ${this.email}, Stilling: ${this.position}`
    );
  }
}

export class Person {
  constructor(name, age, position) {
    this.name = name;
    this.age = age;
    this.position = position;
  }

  present() {
    console.log(`${this.name} er ${this.age} og ${this.position}`);
  }
}
