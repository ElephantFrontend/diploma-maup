import fs from "fs/promises";
import path from "path";
import { randomUUID } from "crypto";

const ammunitionPath = path.join(process.cwd(), "db", "ammunition.json");

async function listAmmunition() {
    try {
        const data = await fs.readFile(ammunitionPath, "utf-8");
        return JSON.parse(data);
    } catch (error) {
        if (error.code === "ENOENT") return [];
        throw error;
    }
}

async function getAmmunitionById(ammunitionId) {
    const ammunitionList = await listAmmunition();
    const ammunition = ammunitionList.find((c) => c.id === ammunitionId);
    return ammunition || null;
}

async function removeAmmunition(ammunitionId) {
    const ammunition = await listAmmunition();
    const index = ammunition.findIndex((c) => c.id === ammunitionId);
    if (index === -1) return null;

    const [removedAmmunition] = ammunition.splice(index, 1);
    await fs.writeFile(ammunitionPath, JSON.stringify(ammunition, null, 2));
    return removedAmmunition;
}

async function addAmmunition(name, color, url, img, category, type) {
    const ammunition = await listAmmunition();
    const newAmmunition = {
        id: randomUUID(),
        name,
        color,
        url,
        img,
        category,
        type
    };
    ammunition.push(newAmmunition);
    await fs.writeFile(ammunitionPath, JSON.stringify(ammunition, null, 2));
    return newAmmunition;
}

async function updateAmmunition(ammunitionId, updatedFields) {
    const ammunition = await listAmmunition();
    const index = ammunition.findIndex(c => c.id === ammunitionId);
    if (index === -1) return null;

    ammunition[index] = { ...ammunition[index], ...updatedFields };

    await fs.writeFile(ammunitionPath, JSON.stringify(ammunition, null, 2));
    return ammunition[index];
}

export { listAmmunition, getAmmunitionById, removeAmmunition, addAmmunition, updateAmmunition };
