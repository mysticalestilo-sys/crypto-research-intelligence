import http from "node:http";
import {evaluateFramework} from "../../../packages/framework/src/index.mjs";
import {decide} from "../../../packages/decision/src/index.mjs";
const PORT=Number(process.env.PORT||8787);
const demoInputs={regime:{value:"bull",state:"BULLISH",source:"demo",observedAt:new Date().toISOString()},trend:{value:1,state:"BULLISH",source:"demo",observedAt:new Date().toISOString()},momentum:{value:1,state:"BULLISH",source:"demo",observedAt:new Date().toISOString()},volume:{value:1,state:"NEUTRAL",source:"demo",observedAt:new Date().toISOString()}};
const json=(res,status,payload)=>{res.writeHead(status,{"content-type":"application/json","access-control-allow-origin":"*"});res.end(JSON.stringify(payload));};
const server=http.createServer((req,res)=>{if(req.url==="/health")return json(res,200,{ok:true,service:"crypto-research-intelligence"});if(req.url==="/api/framework/demo")return json(res,200,decide(evaluateFramework({asset:"BTC",asOf:new Date().toISOString(),inputs:demoInputs})));return json(res,404,{error:"not_found"});});
server.listen(PORT,()=>console.log("research API listening on "+PORT));