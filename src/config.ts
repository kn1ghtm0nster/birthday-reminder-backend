import dotenv from "dotenv";


dotenv.config();

const PORT = +process.env.PORT!;

const getDatabaseUri = () => {
  return process.env.NODE_ENV === "test"
    ? "birthday_reminder_test"
    : process.env.DATABASE_URL || "birthday_reminder_db";
};

console.log("CURRENT CONFIG");
console.log("PORT => ", PORT.toString());
console.log("DATABASE_URL => ", getDatabaseUri());
console.log("------------------------------------------------");

export { PORT, getDatabaseUri};
