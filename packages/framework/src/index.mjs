import {FRAMEWORK_VERSION,RULES} from "./rules.mjs";
import {criterionResult,frameworkResult,STATES} from "../../contracts/src/schema.mjs";
export function evaluateCriterion(rule,input){
 const v=input?.value; if(v===undefined||v===null||input?.status==="stale"||input?.status==="missing") return criterionResult({id:rule.id,name:rule.name,state:"UNKNOWN",score:0,maxScore:rule.maxScore,status:input?.status??"missing"});
 const state=input.state&&STATES.includes(input.state)?input.state:"NEUTRAL"; const score=state==="BULLISH"?rule.maxScore:state==="BEARISH"?0:Math.round(rule.maxScore/2);
 return criterionResult({id:rule.id,name:rule.name,state,score,maxScore:rule.maxScore,evidence:[{metric:rule.metric,value:v,source:input.source,observedAt:input.observedAt,reason:input.reason??null}]});
}
export function evaluateFramework({asset,asOf,inputs={}}){return frameworkResult({asset,asOf,version:FRAMEWORK_VERSION,criteria:RULES.map(r=>evaluateCriterion(r,inputs[r.metric]))});}
export {RULES,FRAMEWORK_VERSION};