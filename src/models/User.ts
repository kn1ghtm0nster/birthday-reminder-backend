import db from "../db";
import moment from "moment";
import sqlForPartialUpdate from "../helpers/sql";

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
    const query: string = `
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
    const query: string = `
            SELECT * FROM users
            ORDER BY id ASC
        `;
    const results = await db.any(query);
    return results;
  }

  /**
   * Updates an existing user based on the values that were received from the route req.body object. If user id provided is not found, error is raised.
   *
   * Returns Object with all the updates for the user and the remaining information from backend.
   *
   * NOTE: User updates DO NOT require all keys to be passed in from route.
   * 
   * sqlForPartialUpdate func is used to format the keys into correct SQL column names for update.
   *
   * @param id {number}
   * @param data {object}
   * @returns {promise}
   */
  static async updateUser(id: number, data: object): Promise<any> {
    try {
      const result = db.oneOrNone("SELECT * from users where id = $1", id);

      if (!result) {
        throw new Error(`User with id ${id} not found!`);
      }

      const { setCols, values } = sqlForPartialUpdate(data, {
        firstName: "first_name",
        lastName: "last_name",
        dob: "dob",
      });

      const query: string = `
        UPDATE users
        SET ${setCols}
        WHERE id = ${id}
        RETURNING
        first_name AS "firstName",
        last_name AS "lastName",
        dob
      `;

      const updatedUser = await db.one(query, [...values, id]);
      return updatedUser;
    } catch (err) {
      console.log(err);
    }
  }

  /**
   * Deletes a user from database using the specified id.
   * 
   * Returns a promise with the id of the user deleted for reference purposes.
   * 
   * @param id {number}
   * @returns {Promise}
   */
  static async deleteUser(id: number): Promise<any>{
    try {
      const query = 'DELETE FROM users WHERE id = $1 RETURNING id';
      const result = await db.one(query, [id]);
      return result.id;
    } catch (err) {
      console.log(err);
    }
  }

  // TODO: implement functionality
  static async addFriend(id: number) {}

  // TODO: implement functionality
  static async removeFriend(id: number) {}

  // TODO: implement functionality
  static async addFamilyMember(id: number) {}

  // TODO: implement functionality
  static async removeFamilyMember(id: number) {}
}
