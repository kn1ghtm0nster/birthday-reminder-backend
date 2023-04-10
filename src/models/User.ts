import db from "../db";
import moment from "moment";

export default class User {
  static async addUser(firstName: string, lastName: string, dob: string) {
    const dobConversion = moment(dob, "MM-DD-YYYY").toDate();
    const query = `
            INSERT INTO users (first_name, last_name, dob)
            VALUES ($1, $2, $3)
            RETURNING 
            first_name AS firstName,
            last_name AS lastName,
            dob
        `;
    const results = await db.one(query, [firstName, lastName, dobConversion]);
    return results;
  }

  static async getAllUsers() {
    const query = `
            SELECT * FROM users
        `;
    const results = await db.any(query);
    return results;
  }
}
