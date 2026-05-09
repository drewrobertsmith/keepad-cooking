import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  // Other tables here...

  recipes: defineTable({
    cookTime: v.float64(),
    description: v.string(),
    ingredients: v.array(v.string()),
    preperation: v.array(v.string()),
    title: v.string(),
  }),
});
