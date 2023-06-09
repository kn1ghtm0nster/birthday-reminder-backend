CREATE TABLE "users" (
  "id" SERIAL PRIMARY KEY NOT NULL,
  "first_name" string NOT NULL,
  "last_name" string NOT NULL,
  "dob" date NOT NULL
);

CREATE TABLE "family_members" (
  "id" SERIAL PRIMARY KEY NOT NULL,
  "family_memeber_id" SERIAL NOT NULL
);

CREATE TABLE "friends" (
  "id" INTEGER GENERATED BY DEFAULT AS IDENTITY PRIMARY KEY NOT NULL,
  "friend_id" INTEGER GENERATED BY DEFAULT AS IDENTITY NOT NULL
);

ALTER TABLE "family_members" ADD FOREIGN KEY ("family_memeber_id") REFERENCES "users" ("id");

ALTER TABLE "friends" ADD FOREIGN KEY ("friend_id") REFERENCES "users" ("id");
