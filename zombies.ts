export interface ZombiesOverall {
    brutusesKilled: number;
    kdratio: number;
    ballisticKnivesPickedup: number;
    prisonBrutusKilled: number;
    bouncingbettyDevilPickedup: number;
    meleeKills: number;
    packAPunchPickedup: number;
    accuracy: number;
    bgbTokensUsed: number;
    zrapsKilled: number;
    talismanUsed: number;
    score: number;
    rank: number;
    killedByCatalystWater: number;
    wwGrenadePickedup: number;
    killedByCatalystElectric: number;
    perkDeadshotKills: number;
    zwaspKilled: number;
    paragonRank: number;
    aatCatalystKills: number;
    powerTurnedon: number;
    deaths: number;
    catalystWatersKilled: number;
    wallbuyWeaponsPurchased: number;
    papWeaponGrabbed: number;
    prisonFanTrapUsed: number;
    totalTimesDiveToProne: number;
    towersAcidTrapBuiltOdin: number;
    roundsNoDamage: number;
    grabbedFromPerkRandom: number;
    killedByBrutus: number;
    revives: number;
    bgbsChewed: number;
    codpoints: number;
    lifetimeBuyin: number;
    perkStrongholdHeadshots: number;
    suicides: number;
    rankxp: number;
    zrazKilled: number;
    shieldsPurchased: number;
    powerTurnedoff: number;
    failedSacrifices: number;
    fullAmmoPickedup: number;
    timePlayedTotal: number;
    fireSalePickedup: number;
    rushFirstPlaceFinishes: number;
    lifetimeEarnings: number;
    combinedRank: number;
    doublePapKills: number;
    plevel: number;
    catalystPlasmasKilled: number;
    perkSliderKills: number;
    killedByBlightfather: number;
    misses: number;
    claymoresPickedup: number;
    zdogsKilled: number;
    totalDowns: number;
    heavyKills: number;
    scepterRevives: number;
    plantedBuildablesPickedup: number;
    grabbedFromMagicbox: number;
    playerKills: number;
    sqTransitStarted: number;
    towersAcidTrapBuiltDanu: number;
    killedByCatalyst: number;
    towersAcidTrapBuiltZeus: number;
    prisonTomahawkAcquired: number;
    prisonAcidTrapUsed: number;
    perkMuleKickKills: number;
    hits: number;
    bouncingbettyPickedup: number;
    shieldChargePickedup: number;
    maxedSpecialWeaponKills: number;
    killedByZdog: number;
    catalystCorrosivesKilled: number;
    specialWeaponLevels: number;
    zmarcadeKeyPickedup: number;
    zspidersKilled: number;
    zthrashersKilled: number;
    highestRoundReached: number;
    rounds: number;
    ammoPurchased: number;
    zdogRoundsFinished: number;
    killedByCatalystCorrosive: number;
    weightedRoundsPlayed: number;
    instaKillPickedup: number;
    doorsPurchased: number;
    totalGamesPlayed: number;
    bgbTokensGained: number;
    wlratio: number;
    totalShots: number;
    dungPickedup: number;
    useMagicbox: number;
    perkElectricCherryKills: number;
    totalFallDistanceFeet: number;
    perksDrank: number;
    zdogRoundsLost: number;
    prisonSpinningTrapUsed: number;
    minigunPickedup: number;
    miniBossKills: number;
    weightedDowns: number;
    papWeaponPacked: number;
    killedByCatalystPlasma: number;
    downs: number;
    bonusPointsTeamPickedup: number;
    killedByGladiator: number;
    curWinStreak: number;
    extraLivesPickedup: number;
    totalRoundsSurvived: number;
    tigersKilled: number;
    wonderWeaponKills: number;
    teamkills: number;
    usePap: number;
    headshotPercentage: number;
    roundsNoDowns: number;
    paragonRankxp: number;
    doublePointsPickedup: number;
    grenadeKills: number;
    playerReturns: number;
    nowhereButThereRevives: number;
    kills: number;
    nukePickedup: number;
    buildablesBuilt: number;
    islandSeedPickedup: number;
    bouncingbettyDevilPlanted: number;
    fastTravels: number;
    boards: number;
    failedRevives: number;
    avgLifeTime: number;
    drops: number;
    headshots: number;
    ties: number;
    novaCrawlersKilled: number;
    assists: number;
    killedByTiger: number;
    catalystsKilled: number;
    distanceTraveled: number;
    gladiatorsKilled: number;
    sacrifices: number;
    upgradedAmmoPurchased: number;
    heroWeaponPowerPickedup: number;
    blightfathersKilled: number;
    avgRoundsCompleted: number;
    carpenterPickedup: number;
    bgbPointdropsGained: number;
    catalystTransformationDenials: number;
    claymoresPlanted: number;
    usePerkRandom: number;
    bouncingbettyHollyPlanted: number;
    papWeaponDoublePacked: number;
    catalystElectricsKilled: number;
    zsentinelKilled: number;
    bouncingbettyHollyPickedup: number;
    totalPoints: number;
    bouncingbettyPlanted: number;
}

export interface ZombiesModeStats {
    wins: number;
    kills: number;
    killStreak: number;
    kdratio: number;
    timePlayedTotal: number;
    winStreak: number;
    defends: number;
    offends: number;
    rushFirstPlaceFinishes: number;
    curWinStreak: number;
    losses: number;
    totalGamesPlayed: number;
    totalRoundsSurvived: number;
    score: number;
    crush: number;
    wlratio: number;
    ties: number;
    assists: number;
    totalPoints: number;
    highestRoundReached: number;
    deaths: number;
}

export interface Mode {
    ztcm_towers: ZombiesModeStats;
    ztrials: ZombiesModeStats;
    zclassic: ZombiesModeStats;
    ztutorial: ZombiesModeStats;
    ztcm_escape: ZombiesModeStats;
    ztcm_zod: ZombiesModeStats;
    zstandard: ZombiesModeStats;
    ztcm: ZombiesModeStats;
}

export interface ZombiesMapStats {
    kills: number;
    mostKills: number;
    doorsPurchased: number;
    mostHeadshots: number;
    highestTeamScore: number;
    highestScore: number;
    rushFirstPlaceFinishes: number;
    totalGamesPlayed: number;
    revives: number;
    totalRoundsSurvived: number;
    headshots: number;
    mainQuestCompleted: number;
    highestMultiplier: number;
    fastestTimeToRound20: number;
    fastestTimeToRound10: number;
    totalDowns: number;
    fastestTimeToCompleteRound30: number;
    highestRoundReached: number;
}

export interface ZombiesMap {
    ztcm_towers: ZombiesMapStats;
    ztrials: ZombiesMapStats;
    zclassic: ZombiesMapStats;
    ztutorial: ZombiesMapStats;
    ztcm_escape: ZombiesMapStats;
    ztcm_zod: ZombiesMapStats;
    zstandard: ZombiesMapStats;
    ztcm: ZombiesMapStats;
}


export interface ZombiesMaps {
    zm_escape: ZombiesMap;
    zm_towers: ZombiesMap;
    zm_zodt8: ZombiesMap;
    zm_office: ZombiesMap;
}

export interface Lifetime {
    all: ZombiesOverall;
    mode: Mode;
    map: ZombiesMaps;
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

export interface RawZombiesObject {
    status: string;
    data: Data;
}
