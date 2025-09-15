const students = [
  {
    id: 1,
    name: 'Marco Lanci',
    age: 32,
    class: '3C'
  },
  {
    id: 2,
    name: 'Mario Banfi',
    age: 34,
    class: '4A'
  },
  {
    id: 3,
    name: 'Luigi Banzi',
    age: 33,
    class: '5B'
  },
];

// Recupera la classe dello studente 'Marco Lanci'
// Risultato: '3C'

const studenteMarco = students.find(student => student.name === "Marco Lanci");
//il metodo .filter restituisce un nuovo array 
const nome = studenteMarco.name;
const classe = studenteMarco.class;
console.log("La classe di" ,nome, "é" ,classe);