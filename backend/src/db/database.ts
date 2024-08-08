import knex from "knex";
import type { Knex } from "knex";
import config from "../../knexfile";

const db = knex(config);

export default db;
