# CHANGELOG

> Change management per Phase 2 §50–51. Every change records: Date / URL / Change / Reason / Old / New / SEO risk / Rollback.

| Date | URL | Change | Reason | Old | New | SEO risk | Rollback |
|---|---|---|---|---|---|---|---|
| 2026-09-17 | data.worldbatteryhub.com/battery-groups/* (16 new pages) | Added 16 BatteryGroup entities to `batteries.json`: H3, 22F, 63, 86, 27F, T5, T6, 60B19, 65B24, 85D23, 100D26, 105D31, 110D31, GC8, 34R, 51R | Phase 2 Week 1: fill high-value entity gaps (08 list) with claim-level evidence | 40 groups | 56 groups | Low — additive only, new URLs, canonical/schema auto-generated | `git revert 86fe48f` |
| 2026-09-18 | data.worldbatteryhub.com/chemistries/ + /chemistries/* (5 new pages) | Added lithium cell chemistry reference: `chemistries.json` (LFP/NMC/NCA/LTO/LMFP — nominal voltage, cell-level energy density, cycle life, temperature window as typical ranges with source annotations) + `/chemistries/` directory + per-chemistry entity pages (DefinedTerm schema) + home index link | P1 §5 Lithium database expansion (audit #16 §19 chemistry database) | No lithium chemistry data on data site | New data file + 5 entity pages + 1 directory page + home link | Low — net-new URLs, no existing URL/title/H1/canonical/robots change | `git revert` this commit (removes pages + data + link) |
