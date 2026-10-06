# Crypto Research Intelligence

Research-first crypto intelligence platform: **multi-source data → normalized evidence → 22-point framework → decision engine → backtest/forward-test → command center**.

## Current implementation
- Versioned 22-point framework registry
- Deterministic scoring with explicit UNKNOWN state for missing/stale data
- Explainable evidence attached to every criterion
- BUY / SETUP / WATCH / AVOID decision engine
- Initial backtest metrics utilities
- Minimal REST API
- Command-center dashboard prototype
- Source adapter contracts for Binance / CoinMarketCap / CoinGecko

## Run
```bash
npm test
npm run dev:api
```
API: `http://localhost:8787/health` and `/api/framework/demo`.

## Product boundary
This is **not a trading bot**. Real-money execution and account management are intentionally outside the research core. The platform is designed for evidence, scoring, historical validation, forward testing and monitoring.

## Architecture
```
Sources → Adapters → Normalization → Evidence Store
                                      ↓
                              22-Point Engine
                                      ↓
                              Decision + Risk
                                      ↓
                         Backtest / Forward Test
                                      ↓
                         API → Command Center
```

## Roadmap
1. Connect live Binance / CoinMarketCap / CoinGecko ingestion
2. Add persistent PostgreSQL/Timescale-compatible storage
3. Load and version the canonical 22-point thresholds/weights
4. Complete event-driven historical replay and performance analytics
5. Add scheduler, freshness alerts and forward-test ledger
6. Expand command-center dashboard and drill-down evidence views
7. Add research assistant and optional execution adapter
