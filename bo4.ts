import { COD_API_ENDPOINT, getDataFromAPI } from './utils';
import { RawBlackoutObject } from './blackout';
import { RawMultiplayerObject } from './multiplayer';
import { RawZombiesObject } from './zombies';

const BO4_ENDPOINT = `${COD_API_ENDPOINT}/crm/cod/v2/title/bo4`;

type Platform = 'psn' | 'xbl' | 'battle';

export function getRawBlackoutStats(username: string, platform: Platform) {
    const uri = `${BO4_ENDPOINT}/platform/${platform}/gamer/${username}/profile?type=blackout`;
    return getDataFromAPI<RawBlackoutObject>(uri);
}

export function getRawMultiplayerStats(username: string, platform: Platform) {
    const uri = `${BO4_ENDPOINT}/platform/${platform}/gamer/${username}/profile?type=mp`;
    return getDataFromAPI<RawMultiplayerObject>(uri)
}

export function getRawZombiesStats(username: string, platform: Platform) {
    const uri = `${BO4_ENDPOINT}/platform/${platform}/gamer/${username}/profile?type=zombies`;
    return getDataFromAPI<RawZombiesObject>(uri);
}

/* These Blackout Methods are not populated with data yet

export async function getSoloBlackoutStats(username: string, platform: Platform) {
    const rawBlackoutObject = await getRawBlackoutStats(username, platform);
    return rawBlackoutObject.data.mp.lifetime.mode.warzone_solo;
}

export async function getDuoBlackoutStats(username: string, platform: Platform) {
    const rawBlackoutObject = await getRawBlackoutStats(username, platform);
    return rawBlackoutObject.data.mp.lifetime.mode.warzone_duo;
}

export async function getQuadBlackoutStats(username: string, platform: Platform) {
    const rawBlackoutObject = await getRawBlackoutStats(username, platform);
    return rawBlackoutObject.data.mp.lifetime.mode.warzone_quad;
}

*/

export async function getOverallBlackoutStats(username: string, platform: Platform) {
    const rawBlackoutObject = await getRawBlackoutStats(username, platform);
    return rawBlackoutObject.data.mp.lifetime.all;
}

export async function getOverallZombiesStats(username: string, platform: Platform) {
    const rawZombiesObject = await getRawZombiesStats(username, platform);
    return rawZombiesObject.data.mp.lifetime.all;
}

export async function getLifetimeMultiplayerStats(username: string, platform: Platform) {
    const rawMultiplayerObject = await getRawMultiplayerStats(username, platform);
    return rawMultiplayerObject.data.mp.lifetime;
}

export async function getWeeklyMultiplayerStats(username: string, platform: Platform) {
    const rawMultiplayerObject = await getRawMultiplayerStats(username, platform);
    return rawMultiplayerObject.data.mp.weekly;
}