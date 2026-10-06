export const SOURCES=["binance","coinmarketcap","coingecko"];
export function normalizeMarketObservation({source,asset,metric,value,observedAt,quality="ok",freshnessSeconds=300}){return {source,asset,metric,value,observedAt,ingestedAt:new Date().toISOString(),quality,freshnessSeconds};}
export function isFresh(o,now=Date.now()){return o?.quality==="ok" && now-new Date(o.observedAt).getTime()<=o.freshnessSeconds*1000;}
export const adapterContract={fetch:async()=>{throw new Error("adapter not configured")}};
