import type { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable("links", (table) => {
        table.increments("id").primary();
        table.string("original_url").notNullable().unique();
        table.string("short_url").notNullable().unique();
        table.integer("link_click").defaultTo(0);
        table.integer("scan_count").defaultTo(0);
        table.timestamp("created_at").defaultTo(knex.fn.now());
    });
}

export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTableIfExists("links");
}
