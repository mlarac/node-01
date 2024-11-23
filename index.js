
import VeterinaryRecord from './operaciones.js';

const vetRecord = new VeterinaryRecord();

const registrar = async (nombre, edad, animal, color, enfermedad) => {
  try {
    await vetRecord.registerAppointment(nombre, edad, animal, color, enfermedad);
    console.log('Cita registrada exitosamente.');
  } catch (error) {
    console.error('Error al registrar la cita:', error.message);
  }
};

const leer = async () => {
  try {
    const records = await vetRecord.getAllRecords();
    console.log('Registros de citas veterinarias:');
    console.log(JSON.stringify(records, null, 2));
  } catch (error) {
    console.error('Error al leer las citas:', error.message);
  }
};

// obtenemos variables de linea de comando
const operacion = process.argv[2];
const nombre = process.argv[3];
const edad = process.argv[4];
const animal = process.argv[5];
const color = process.argv[6];
const enfermedad = process.argv[7];

if (operacion === "registrar") {
  registrar(nombre, edad, animal, color, enfermedad);
}
if (operacion === "leer") {
  leer();
}
