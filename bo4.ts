import {
    BlackoutMatch,
    BlackoutOverall,
    RawBlackoutMatchesObject,
    RawBlackoutObject
    } from './blackout';
import { COD_API_ENDPOINT, getDataFromAPI } from './utils';
import {
    RawZombiesMatchesObject,
    RawZombiesObject,
    ZombiesMatch,
    ZombiesOverall
    } from './zombies';
import {
    MultiplayerLifetime,
    MultiplayerMatch,
    MultiplayerWeekly,
    RawMultiplayerMatchesObject,
    RawMultiplayerObject,
    } from './multiplayer';

const BO4_ENDPOINT = `${COD_API_ENDPOINT}/crm/cod/v2/title/bo4`;

export type BO4Platform = 'psn' | 'xbl' | 'battle';

export function getRawMultiplayerStats(username: string, platform: BO4Platform) {
    const uri = `${BO4_ENDPOINT}/platform/${platform}/gamer/${username}/profile?type=mp`;
    return getDataFromAPI<RawMultiplayerObject>(uri)
}

export function getRawBlackoutStats(username: string, platform: BO4Platform) {
    const uri = `${BO4_ENDPOINT}/platform/${platform}/gamer/${username}/profile?type=blackout`;
    return getDataFromAPI<RawBlackoutObject>(uri);
}

export function getRawZombiesStats(username: string, platform: BO4Platform) {
    const uri = `${BO4_ENDPOINT}/platform/${platform}/gamer/${username}/profile?type=zombies`;
    return getDataFromAPI<RawZombiesObject>(uri);
}

export interface MatchesProps {
    username: string;
    platform: BO4Platform;
    start?: Date;
    end?: Date;
}

export function getRawMultiplayerMatchesStats({ username, platform, start, end }: MatchesProps) {
    const startTimestamp = start ? start.getTime() : 0;
    const endTimestamp = end ? end.getTime() : 0;
    const uri = `${BO4_ENDPOINT}/platform/${platform}/gamer/${username}/matches/mp/start/${startTimestamp}/end/${endTimestamp}/details`;
    return getDataFromAPI<RawMultiplayerMatchesObject>(uri);
}

export function getRawBlackoutMatchesStats({ username, platform, start, end }: MatchesProps) {
    const startTimestamp = start ? start.getTime() : 0;
    const endTimestamp = end ? end.getTime() : 0;
    const uri = `${BO4_ENDPOINT}/platform/${platform}/gamer/${username}/matches/warzone/start/${startTimestamp}/end/${endTimestamp}/details`;
    return getDataFromAPI<RawBlackoutMatchesObject>(uri);
}

export function getRawZombiesMatchesStats({ username, platform, start, end }: MatchesProps) {
    const startTimestamp = start ? start.getTime() : 0;
    const endTimestamp = end ? end.getTime() : 0;
    const uri = `${BO4_ENDPOINT}/platform/${platform}/gamer/${username}/matches/zombies/start/${startTimestamp}/end/${endTimestamp}/details`;
    return getDataFromAPI<RawZombiesMatchesObject>(uri);
}

/* These Blackout Methods are not populated with data yet

export async function getSoloBlackoutStats(username: string, platform: BO4Platform) {
    const rawBlackoutObject = await getRawBlackoutStats(username, platform);
    return rawBlackoutObject.data.mp.lifetime.mode.warzone_solo;
}

export async function getDuoBlackoutStats(username: string, platform: BO4Platform) {
    const rawBlackoutObject = await getRawBlackoutStats(username, platform);
    return rawBlackoutObject.data.mp.lifetime.mode.warzone_duo;
}

export async function getQuadBlackoutStats(username: string, platform: BO4Platform) {
    const rawBlackoutObject = await getRawBlackoutStats(username, platform);
    return rawBlackoutObject.data.mp.lifetime.mode.warzone_quad;
}

*/

export async function getOverallBlackoutStats(username: string, platform: BO4Platform): Promise<BlackoutOverall> {
    const rawBlackoutObject = await getRawBlackoutStats(username, platform);
    return rawBlackoutObject.data.mp.lifetime.all;
}

export async function getOverallZombiesStats(username: string, platform: BO4Platform): Promise<ZombiesOverall> {
    const rawZombiesObject = await getRawZombiesStats(username, platform);
    return rawZombiesObject.data.mp.lifetime.all;
}

export async function getLifetimeMultiplayerStats(username: string, platform: BO4Platform): Promise<MultiplayerLifetime> {
    const rawMultiplayerObject = await getRawMultiplayerStats(username, platform);
    return rawMultiplayerObject.data.mp.lifetime;
}

export async function getWeeklyMultiplayerStats(username: string, platform: BO4Platform): Promise<MultiplayerWeekly> {
    const rawMultiplayerObject = await getRawMultiplayerStats(username, platform);
    return rawMultiplayerObject.data.mp.weekly;
}

export async function getMultiplayerMatchesStats(props: MatchesProps): Promise<MultiplayerMatch[]> {
    const rawMatchesObject = await getRawMultiplayerMatchesStats(props);
    return rawMatchesObject.data.matches;
}
export async function getBlackoutMatchesStats(props: MatchesProps): Promise<BlackoutMatch[]> {
    const rawMatchesObject = await getRawBlackoutMatchesStats(props);
    return rawMatchesObject.data.matches;
}
export async function getZombiesMatchesStats(props: MatchesProps): Promise<ZombiesMatch[]> {
    const rawMatchesObject = await getRawZombiesMatchesStats(props);
    return rawMatchesObject.data.matches;
}