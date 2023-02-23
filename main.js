const arrayAlumnos = [
  { id: 1, nombre: "Pepe" },
  { id: 2, nombre: "Ana" },
  { id: 3, nombre: "Juan" },
  { id: 4, nombre: "Pepi" },
  { id: 5, nombre: "bea" },
];
const arrayNotas = [
  { id: 1, nota: 8 },
  { id: 2, nota: 7 },
  { id: 5, nota: 9 },
];
const arrayBeca = [
  { id: 2, beca: true },
  { id: 5, beca: false },
];
const id = 5;
const getAlumnos = (id, cb) => {
  let alumno = arrayAlumnos.find((item) => item.id == id)?.nombre;

  if (!alumno) {
    cb(`El alumno con id ${id} no existe`, null);
  } else {
    cb(null, alumno);
  }
};
const getNotas = (id, cb) => {
  let nota = arrayNotas.find((item) => item.id == id)?.nota;
  if (!nota) {
    cb(`El alumno no tiene nota`, null);
  } else {
    cb(null, nota);
  }
};

const hasBeca = (id, cb) => {
  let beca = arrayBeca.find((item) => item.id == id)?.beca;
  if (beca == undefined) {
    cb(`El alumno no pidio beca`, null);
  } else {
    cb(null, beca);
  }
};

getAlumnos(id, (error, alumno) => {
  if (error) {
    console.log(error);
  } else {
    getNotas(id, (error, nota) => {
      if (error) {
        console.log(error);
      } else {
        hasBeca(id, (error, beca) => {
          if (error) {
            console.log(error);
          } else {
            if (beca == true) {
              console.log("Tiene beca");
            } else {
              console.log("No tiene beca");
            }
          }
        });
      }
    });
  }
});
