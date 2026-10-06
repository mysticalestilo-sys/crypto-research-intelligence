# Architecture

## Purpose
Crypto Research Intelligence is a research-first platform for multi-source crypto market data, a machine-readable 22-point framework, historical replay/backtesting, forward testing, decision scoring, and a compact command-center dashboard.

## Flow
Data adapters -> normalization -> time-series storage -> 22-point engine -> decision engine -> backtest/forward test -> dashboard/API.

## Design principles
- Research before execution; no real-money trading dependency.
- Every score has evidence, source, timestamp, and freshness.
- Historical replay must avoid look-ahead bias.
- Data adapters are replaceable and normalized into common contracts.
- Technical, derivatives, on-chain, fundamental, sentiment and regime signals can be evaluated together.

## Planned modules
- apps/api: REST research API
- apps/dashboard: command-center UI
- apps/worker: ingestion and scheduled calculations
- packages/data: source adapters and normalization
- packages/framework: 22-point rules and scoring
- packages/decision: action/risk logic
- packages/backtest: event-driven historical replay and metrics
- packages/database: persistence/time-series models
- packages/contracts: shared schemas
- research: framework definitions and experiment outputs
