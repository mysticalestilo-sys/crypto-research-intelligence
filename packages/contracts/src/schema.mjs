export const ACTIONS = ["BUY","SETUP","WATCH","AVOID"];
export const STATES = ["BULLISH","NEUTRAL","BEARISH","UNKNOWN"];
export function observation({asset,metric,value,observedAt,source,freshnessSeconds=300}){return {asset,metric,value,observedAt,source,freshnessSeconds};}
export function criterionResult({id,name,state,score,maxScore,evidence=[],status="ok"}){return {id,name,state,score,maxScore,evidence,status};}
export function frameworkResult({asset,asOf,version,criteria}){const max=criteria.reduce((s,c)=>s+c.maxScore,0);const score=criteria.reduce((s,c)=>s+c.score,0);return {asset,asOf,version,score,maxScore:max,scorePct:max?Math.round(score/max*1000)/10:0,criteria};}