export interface BaseStats {
    killsRevenge: number;
    top10PlacementTeam: number;
    kdratio: number;
    killsUnderwaterEnemy: number;
    downsEliminatedTeam: number;
    ekia: number;
    score: number;
    distanceTraveledWingsuit: number;
    rank: number;
    deaths: number;
    frackingBlastDoorsOpened: number;
    killsEliminated: number;
    wins: number;
    itemsDropped: number;
    squads2Eliminated: number;
    winStreak: number;
    distanceTraveledVehicleLand: number;
    headshotDamage: number;
    top5PlacementPlayer: number;
    revives: number;
    activationCountBroadcast: number;
    rankxp: number;
    placementxp: number;
    killsWithoutDamage: number;
    downsEliminated: number;
    shots: number;
    killsAfterRevive: number;
    top10PlacementTeamNoCircleDamage: number;
    timePlayedTotal: number;
    killxp: number;
    killsLongshotSniper: number;
    top15PlacementTeam: number;
    top5PlacementTeam: number;
    killsEquipment: number;
    winsLastAlive: number;
    itemsPickedUp: number;
    totalDamage: number;
    plevel: number;
    killsEnemyInVehicleWater: number;
    squads4Eliminated: number;
    downsRevived: number;
    misses: number;
    squadsEliminatedUnassisted: number;
    basketsMade: number;
    hitsHeadshot: number;
    killStreak: number;
    itemsHealthUsed: number;
    killsEnemyInVehicleLand: number;
    winxp: number;
    top10PlacementTeamPerks: number;
    hits: number;
    itemsBackpacksUsed: number;
    killsLongshot: number;
    challengexp: number;
    mostKillsInAGame: number;
    longestFiringRangeBullseye: number;
    killsVehiclePassenger: number;
    activationCountCrane: number;
    tanborFudgelyInteractions: number;
    losses: number;
    vehicleScavengerWater: number;
    totalGamesPlayed: number;
    killsUnderwater: number;
    killsEnemyInVehicleAir: number;
    winsWithoutDown: number;
    totalShots: number;
    wlratio: number;
    destroyEquipment: number;
    killsEarly: number;
    characterQuestsCompleted: number;
    distanceTraveledWingsuitMiles: number;
    downs: number;
    top5FirstInventory: number;
    distanceTraveledVehicleWater: number;
    curWinStreak: number;
    vehicleEscapes: number;
    distanceTraveledVehicleLandMiles: number;
    vehicleScavengerAir: number;
    killsUnarmed: number;
    killsAfterDamage: number;
    top25PlacementPlayer: number;
    vehiclesDestroyed: number;
    vehicleUsedAll: number;
    killsZombie: number;
    winsFirst: number;
    killsAfterDamageUnarmed: number;
    vehicleLockExits: number;
    distanceTraveledVehicleAir: number;
    killsWhileStunned: number;
    kills: number;
    distanceTraveledVehicleAirMiles: number;
    vehiclesDestroyedOccupied: number;
    top10PlacementPlayer: number;
    top5Avenger: number;
    vehicleDamageOccupied: number;
    activationCountJukebox: number;
    distanceTraveledFoot: number;
    killsVehicleDriver: number;
    headshots: number;
    assists: number;
    itemsPaintCansCollected: number;
    ties: number;
    vehicleDamage: number;
    longestDistanceKill: number;
    distanceTraveledVehicleWaterMiles: number;
    vehiclesDestroyedOccupiedUsingVehicle: number;
    itemsNPaintCansCollected: number;
    maxFiringRangeBullseye: number;
    itemsArmorUsed: number;
    killsAvenged: number;
    winsWithoutKills: number;
    cargoSupplyOpened: number;
    vehicleScavengerLand: number;
    mostDamageInAGame: number;
    timePlayedAlive: number;
    squads3Eliminated: number;
}

export interface BlackoutOverall extends BaseStats {
    topPlacementsAll: number;
    accuracy: number;
    damagePerMinute: number;
    ekiadRatio: number;
    killsEarlyPercentage: number;
    winPercentage: number;
    damagePerGame: number;
    ekiaPerGame: number;
    headshotPercentage: number;
    topPlacementsPlayer: number;
    topPlacementsTeam: number;
    revivesPerGame: number;
    avgLifeTime: number;
    killsPerGame: number;
}

export interface Mode {
    warzone_duo: BaseStats;
    warzone_quad: BaseStats;
    warzone_solo: BaseStats;
}

export interface Lifetime {
    all: BlackoutOverall;
    mode: Mode;
}

export interface Mp {
    lifetime: Lifetime;
    level: number;
    maxLevel: number;
    levelXpRemainder: number;
    levelXpGained: number;
    prestige: number;
    prestigeId: number;
    maxPrestige: number;
}

export interface Data {
    title: string;
    platform: string;
    username: string;
    mp: Mp;
    engagement: any;
}

export interface RawBlackoutObject {
    status: string;
    data: Data;
}
