import { readFile, writeFile } from "node:fs/promises";

class VeterinaryRecord {
  constructor() {
    this.records = [];
    this.filePath = "./citas.json";
  }

  async loadRecords() {
    try {
      const data = await readFile(this.filePath, "utf8");
      this.records = JSON.parse(data);
    } catch (error) {
      if (error.code === "ENOENT") {
        this.records = [];
      } else {
        throw error;
      }
    }
  }

  async saveRecords() {
    await writeFile(this.filePath, JSON.stringify(this.records, null, 2));
  }

  addRecord(nombre, edad, tipo, color, enfermedad) {
    const newRecord = {
      nombre,
      edad,
      tipo,
      color,
      enfermedad
    };
    this.records.push(newRecord);
  }

  async registerAppointment(nombre, edad, tipo, color, enfermedad) {
    await this.loadRecords();
    this.addRecord(nombre, edad, tipo, color, enfermedad);
    await this.saveRecords();
  }

  async getAllRecords() {
    await this.loadRecords();
    return this.records;
  }
}

export default VeterinaryRecord;

