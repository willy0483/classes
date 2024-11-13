import { User, Greeting, Year, Paycard, Person } from "./classes/userClass.js";
const myUser = new User(
  "william",
  "leander jensen",
  "willyjensen251@gmail.com",
  "2006",
  "uddannelse",
  "mand"
);
// myUser.present();

const myGreeting = new Greeting("William", "Jensen");
// myGreeting.present();

const myYear = new Year("2006");
// myYear.present();

const myPaycard = new Paycard(
  "William leander jensen",
  "willyjensen251@gmail.com",
  "uddannelse"
);
// myPaycard.present();

const baker = new Person("Emma", "32", "bager");
const carpenter = new Person("Lucas", "45", "tømrer");
const webDeveloper = new Person("Sofie", "28", "webudvikler");

baker.present();
carpenter.present();
webDeveloper.present();
