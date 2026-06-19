import { PrismaClient } from "@prisma/client";
import { tools } from "../lib/data/tools";
import { stacks } from "../lib/data/stacks";
const prisma = new PrismaClient();
function pricing(p: string) { return p === "Lifetime Deal" ? "LifetimeDeal" : p; }
function ai(p: string) { return p === "Add-ons" ? "Addons" : p === "None" ? "NoAI" : p; }
async function main() {
  for (const tool of tools) {
    await prisma.tool.upsert({ where: { slug: tool.slug }, update: {}, create: { ...tool, pricing: pricing(tool.pricing) as any, aiCapabilities: ai(tool.aiCapabilities) as any } });
  }
  for (const stack of stacks) {
    await prisma.stack.upsert({ where: { slug: stack.slug }, update: {}, create: { slug: stack.slug, name: stack.name, profession: stack.profession, description: stack.description, items: { create: stack.items } } });
  }
}
main().then(()=>prisma.$disconnect()).catch(async(e)=>{ console.error(e); await prisma.$disconnect(); process.exit(1); });
