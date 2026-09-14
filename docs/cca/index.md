# Cold Cranking Amps (CCA) — Reference

Companion data to the [main-site article](https://worldbatteryhub.com/lead-acid/cca/what-is-cca/).
CCA is a cold-start power rating measured under a specific standard; a value without its standard is
not comparable.

## Standards at a glance

| Standard | Region | Temperature | Cut-off / method | Effect on number |
|---|---|---|---|---|
| JIS D5301 | Japan / Asia | −15°C | reference | Higher (warmer test) |
| SAE J537 | North America | −18°C (0°F) | 30 s, ≥7.2V | baseline |
| EN 50342 | Europe | −18°C | 10 s to 7.5V | differs (higher cut-off) |
| DIN 43539 | Germany / Europe | −18°C | 30 s to 9.0V | lower (stricter cut-off) |
| CA / MCA | marine / general | 0°C (32°F) | 30 s, ≥7.2V | higher than CCA |

## Key relationships

- **CCA vs Ah**: CCA is instantaneous cranking power (short, high-current burst); Ah is total stored
  energy (long, low-current discharge). Independent dimensions — no fixed multiplier.
- **MCA vs CCA**: MCA is tested at 0°C, so it is always higher — typically 20–25% higher than the same
  battery's CCA.

## Typical values (directional, by battery type)

| Battery type | Typical CCA range (SAE) |
|---|---|
| Compact / subcompact (Group 35, 47) | 400–550 |
| Mid-size / SUV (Group 48, 65) | 550–750 |
| Full-size / truck (Group 31, 65) | 650–900 |
| Heavy-duty / commercial | 800–1100+ |

> Values are directional market references, not a specification. Confirm the exact value and its
> standard against the manufacturer's datasheet.
