import db from "../db";
import moment from "moment";

export default class User {

  /**
   * Creates a new user from parameters passed in and returns an object with the same information that was passed into the function.
   * 
   * @param firstName: string
   * @param lastName: string
   * @param dob: string
   */
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

  /**
   * Returns an array of user objects that contain id, name information, and dob.
   * 
   * @returns [array]
   */
  static async getAllUsers() {
    const query = `
            SELECT * FROM users
        `;
    const results = await db.any(query);
    return results;
  }

  // TODO: implement functionality
  static async updateUser(firstName: string, lastName: string, dob: string) {

  }

  // TODO: implement functionality
  static async deleteUser(id: number) {

  }

  // TODO: implement functionality
  static async addFriend(id: number){

  }

  // TODO: implement functionality
  static async removeFriend(id: number){

  }

  // TODO: implement functionality
  static async addFamilyMember(id: number){

  }

  // TODO: implement functionality
  static async removeFamilyMember(id: number){

  }
}
