import batteries from '../data/batteries.json';

export const prerender = true;

export function GET() {
  const dataset = {
    name: 'Battery Group Reference Data',
    description:
      'Entity database of battery groups — H4-H9, JIS N-series and BCI groups with voltage, capacity, CCA (with its standard), dimensions, terminal, technology and evidence. Values are cross-verified ranges, not a substitute for a specific battery datasheet.',
    license: 'CC BY 4.0',
    licenseUrl: 'https://creativecommons.org/licenses/by/4.0/',
    version: '2026-09',
    dateModified: '2026-09-18',
    creator: 'World Battery Hub',
    creatorUrl: 'https://worldbatteryhub.com',
    recordCount: batteries.batteries.length,
    data: batteries.batteries,
  };
  return new Response(JSON.stringify(dataset, null, 2), {
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
  });
}
