# 22-Point Research Framework

The production implementation will represent each criterion as structured metadata rather than hard-coded dashboard text.

Each point should define:
- id and name
- category
- metric(s)
- timeframe
- bullish / neutral / bearish rules
- threshold(s)
- score contribution
- weight
- data source(s)
- maximum acceptable data age
- evidence explanation

The engine returns both a numeric score and an auditable evidence record. Missing or stale data must never be silently interpreted as bullish or bearish.

Initial category families:
1. Market regime
2. Trend / structure
3. Momentum
4. Volume / liquidity
5. Derivatives
6. Open interest
7. Funding
8. Long/short positioning
9. Liquidations
10. Whale / smart-money activity
11. Exchange flows
12. On-chain activity
13. Realized/unrealized P&L
14. Tokenomics / supply
15. Fundamental traction
16. Revenue / fees
17. Ecosystem / TVL
18. Narrative / catalysts
19. Social / attention
20. Sentiment
21. Risk / security
22. Relative strength / rotation

Thresholds will be versioned and validated against the user's canonical framework before being treated as production rules.
