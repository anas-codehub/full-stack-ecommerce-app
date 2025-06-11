import { sql } from "drizzle-orm";

import { pgTable, serial, text, varchar, timestamp,  integer } from "drizzle-orm/pg-core";


export const user = pgTable("users", {
    id: serial("id").primaryKey(),
    fname: varchar("fname", {length:100}).notNull(),
    lname: varchar("lname", {length:100}).notNull(),
    email: varchar("email",{length:100}).unique().notNull(),
    provider: varchar("provider",{length:20}),
    externalID: varchar("externalID",{length:100}).notNull(),
    image: text("image"),
    role: varchar("role", {length:12}).notNull().default("customer"),
    updatedAt:timestamp("updatedAt").default(sql`CURRENT_TIMESTAMP`),
    createdAt: timestamp("createdAt").default(sql`CURRENT_TIMESTAMP`),
})

export const products = pgTable("products",{
    id: serial("id").primaryKey(),
    name: varchar("name", {length:100}).notNull(),
    image: text("image"),
    description: text("description"),
    price: integer("price").notNull(),
    updatedAt:timestamp("updatedAt").default(sql`CURRENT_TIMESTAMP`),
    createdAt: timestamp("createdAt").default(sql`CURRENT_TIMESTAMP`),
})