import { Requirement } from "./requirements";
enum Rarity {
    COMMON, UNCOMMON, RARE, EPIC, LEGENDARY, MYTHIC, DIVINE, SPECIAL, VERYSPECIAL, ULTIMATE, ADMIN
}
export interface SkyblockItem {
    internalID: string;
    name: string;
    summary: string;
    sellPrice: number;
    sellable: boolean;
    tradable: boolean;
    auctionable: boolean;
    reforgeable: boolean;
    enchantable: boolean;
    canAddToMuseum: boolean;
    releaseDate: Date;
    imageLink: URL;
    rarity: Rarity;
    abilities: string[];
    requirements: Requirement;
}