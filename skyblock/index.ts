import * as readline from "readline-sync";
import { SkyblockItem } from "./items-interface";
// ---------------------------------------
let userInput: number = 0;
let selectionID: string;
async function fetchItems() {
    try {
        const response = await fetch("https://raw.githubusercontent.com/Kazaretski/HypixelSkyblock/main/skyblock-items.json");
        if (!response.ok) throw new Error(String(response.status));
        const allItems: SkyblockItem[] = await response.json();
        main(allItems);
    } catch (error: any) {
        console.log(`/!\\ ERROR: ${error} /!\\`);
    }
}
function showItemSummary(items:SkyblockItem[]) {
    console.log("----------------------------------");
    for (let i = 0; i < items.length; i++) {
        console.log(`${i+1}.\t${items[i].rarity} ${items[i].name} (ID: ${items[i].internalID})`);
    }
    console.log("----------------------------------");
}
function showItemById(items:SkyblockItem[]) {
    selectionID = readline.question("Please enter an item's ID:\n> ").toUpperCase();
    console.log("----------------------------------");
    for (let i = 0; i < items.length; i++) {
        if (items[i].internalID == selectionID) {
            // Basic info
            console.log(`Name:\t\t\t${items[i].name}\nSummary:\t\t${items[i].summary}\nSell Price:\t\t${items[i].sellPrice}`);
            // Booleans
            console.log(`Sellable?\t\t${items[i].sellable}\nTradable?\t\t${items[i].tradable}\nAuctionable?\t\t${items[i].auctionable}\nReforgeable?\t\t${items[i].reforgeable}\nEnchantable?\t\t${items[i].enchantable}\nCan add to museum?\t${items[i].canAddToMuseum}`);
            // Misc info
            console.log(`Release date:\t\t${items[i].releaseDate}\nImage link:\t\t${items[i].imageLink}\nRarity:\t\t\t${items[i].rarity}\nAbilities:\t\t${items[i].abilities}`);
            // Object
            console.log(`Requirements:\n\tFloor Name:\t\t${items[i].requirements.officialName}\n\tDungeon Size:\t\t${items[i].requirements.dungeonSize}\n\tLevel Requirement:\t${items[i].requirements.levelRequirement}\n\tBosses:\t\t\t${items[i].requirements.bosses}`);
        }
    }
    console.log("----------------------------------");
}
function main(item:SkyblockItem[]) {
    do {
        userInput = Number(readline.question("==== SkyBlock Item JSON Viewer ====\n\t[1] View everything\n\t[2] Search by internal ID\n\t[3] Exit program\n> "));
        switch (userInput) {
            case 1:
                showItemSummary(item);
                break;
            case 2:
                showItemById(item);
                break;
            case 3:
                break;
            default:
                console.log("\n/!\\ ERROR: Invalid menu option! /!\\");
                break;
        }
    } while (userInput !== 3);
    console.log("\nUntil next time!");
}
fetchItems();
// ---------------------------------------
export{}