---
layout: ../../layouts/post.astro
title: How Big Is Drayage, Really?
description: Using the latest federal and industry data to show drayage is roughly 3% of U.S. trucking by tonnage and revenue
dateFormatted: Aug 28th, 2025
---

Using the latest federal and industry data, drayage (container trucking to/from marine terminals and rail ramps) is roughly **~3% of U.S. trucking by tonnage** and **~3% by revenue**. The tonnage estimate comes from 2023 containerized import/export weights reported by the U.S. Bureau of Transportation Statistics (BTS) benchmarked against ATA's 2023 trucking tons. The revenue share uses IANA's drayage revenue estimate against ATA's 2023 trucking revenue.

## What Counts as "Drayage" Here

Short-haul container moves tied to marine terminals (port → warehouse/transload/rail) and rail ramps (ramp ↔ shipper), including the first/last mile around an intermodal rail move. This excludes long-haul truckload and LTL linehaul; the goal is to isolate the container first/last-mile slice. (IANA's framing of the sector is a good shorthand.)

## The Numbers

### 1) The Denominator: Total U.S. Trucking

- Tonnage: Trucks moved ~11.18 billion tons in 2023 ([ATA](https://www.trucking.org/news-insights/ata-american-trucking-trends-2024?utm_source=chatgpt.com)).
- Revenue: Trucking generated ~$1.004 trillion in 2023 ([ATA](https://www.trucking.org/news-insights/ata-american-trucking-trends-2025?utm_source=chatgpt.com)).

### 2) A Clean, Conservative Drayage Tonnage Proxy

- Containerized imports (2023): ~209.8 million short tons ([BTS](https://data.bts.gov/stories/s/Containerized-Imports-at-US-Ports/p3bt-a5up/?utm_source=chatgpt.com)).
- Containerized exports (2023): ~117.5 million short tons ([BTS](https://data.bts.gov/stories/s/Containerized-Exports-at-US-Ports/38t4-dnq3/?utm_source=chatgpt.com)).

**Baseline drayage tons ≈ 209.8 + 117.5 = 327.3 million short tons.**

**Share of trucking tons ≈ 327.3M ÷ 11,180M ≈ 2.9%.**

**Why this works**: nearly every loaded containerized international move requires at least one truck dray—either at the seaport or at the inland rail ramp—even when on-dock rail handles the port side. Using the cargo's shipping weight avoids double-counting multi-leg drays against ATA's "primary shipment" tonnage.

**Reasonable range.** Add a modest allowance for domestic intermodal (pure rail-ramp drays that never touch a seaport) and it'll edge the tonnage share up toward the low-3s. IANA/AAR report ~18 million rail intermodal loads annually; only a portion of these represent domestic containers that create drays outside ports, so we keep the headline at ~3% to stay conservative.

### 3) Revenue Share Cross-Check

- Drayage revenue (North America): ~$28.7B ([IANA](https://intermodal.org/what-intermodal?utm_source=chatgpt.com)).
- Trucking revenue (U.S., 2023): ~$1.004T ([ATA](https://www.trucking.org/news-insights/ata-american-trucking-trends-2025?utm_source=chatgpt.com)).

Applying the IANA number to the U.S. trucking revenue gets a ~2.9% share. Because IANA's figure is North America-wide, the U.S.-only drayage share is more likely just under 3%—still right in line with the tonnage result.

## Assumptions

- **Scope & units.** BTS containerized weights are short tons; ATA tonnage is primary shipments. Using containerized import/export weight once (not multiplying by the number of dray legs) keeps the comparison conservative and apples-to-apples.

- **On-dock rail.** Even where a port bypasses a truck move onto rail, an inland ramp dray almost always occurs at destination (or at origin for exports). The baseline still captures the minimum freight mass that creates drayage work.

- **Domestic intermodal.** We resisted bolting on a big adder. While rail intermodal handles ~18M loads/year, only the domestic subset adds drays outside ports, and some of those are operationally small. Hence the ~3% headline, not 4–5%.

- **Latest revenue context.** ATA notes 2024 trucking revenue eased to $906B (down from $1.004T in 2023). Benchmarking the same $28.7B against 2024 rounds the share a touch higher (~3.2%), but we keep 2023-vs-2023 for consistency.

## What This Means If You're Sizing the Opportunity

- **It's small by dollars, big by velocity.** A **~3% revenue slice** sounds small until you remember these are **short-haul, high-turn** moves where cycle time and appointment discipline make or break margins.

- **Tech matters outsized.** Pre-gate apps, slotting, and electronic interchange receipts (EIR/J1) compress dwell, reduce bobtails, and help capture accessorials—key levers when the TAM is thin but the **throughput** is large.

## Sources

- **[ATA – American Trucking Trends](https://www.trucking.org/news-insights/ata-american-trucking-trends-2024?utm_source=chatgpt.com)** (2024 & 2025 releases: tonnage and revenue).
- **[BTS – Containerized Imports/Exports (2023)](https://data.bts.gov/stories/s/Containerized-Imports-at-US-Ports/p3bt-a5up/?utm_source=chatgpt.com)** – short tons and value.
- **[IANA – The Power of the North American Intermodal Industry](https://intermodal.org/what-intermodal?utm_source=chatgpt.com)** (drayage moves & revenue).
