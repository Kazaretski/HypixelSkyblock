enum DungeonSize {
    Small, Medium, Large
}
export interface Requirement {
    floorId: string;
    officialName: string;
    dungeonSize: DungeonSize;
    levelRequirement: number;
    bosses: string[];
}