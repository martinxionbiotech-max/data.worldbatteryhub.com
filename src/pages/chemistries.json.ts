import chemistries from '../data/chemistries.json';

export const prerender = true;

export function GET() {
  const dataset = {
    name: 'Lithium Cell Chemistry Reference Data',
    description:
      'Reference data for lithium cell chemistries — LFP, NMC, NCA, LTO, LMFP — with nominal voltage, energy density (with basis), cycle life (with test conditions) and temperature windows.',
    license: 'CC BY 4.0',
    licenseUrl: 'https://creativecommons.org/licenses/by/4.0/',
    version: '2026-09',
    dateModified: '2026-09-18',
    creator: 'World Battery Hub',
    creatorUrl: 'https://worldbatteryhub.com',
    recordCount: chemistries.chemistries.length,
    data: chemistries.chemistries,
  };
  return new Response(JSON.stringify(dataset, null, 2), {
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
  });
}
