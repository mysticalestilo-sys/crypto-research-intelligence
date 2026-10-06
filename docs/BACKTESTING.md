# Backtesting Specification

Backtesting is event-driven and multi-factor. It must replay only information available at each historical timestamp.

Inputs may include candles, volume, open interest, funding, liquidations, positioning, whale/on-chain metrics, fundamentals, sentiment, market regime and source freshness.

Required outputs:
- signal count
- win rate
- average and median forward return
- expectancy
- profit factor
- max drawdown
- Sharpe and Sortino
- risk/reward
- holding time
- false-positive rate
- false-negative rate
- performance by asset, timeframe and market regime
- criterion contribution / ablation where data permits

Backtests must record framework version, data-source versions, parameters and run timestamp so results are reproducible.
