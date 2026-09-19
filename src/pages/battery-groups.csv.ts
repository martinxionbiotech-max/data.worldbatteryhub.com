import batteries from '../data/batteries.json';

export const prerender = true;

const esc = (v: unknown): string => {
  const s = String(v ?? '');
  return /[",\n]/.test(s) ? `"${s.replace(/"/g, '""')}"` : s;
};

export function GET() {
  const cols = ['id','group','aliases','standard','voltage','capacity_ah','cca','cca_basis','dimensions_mm','terminal','technology','weight_kg','capacity_class','evidence_confidence','evidence_date'];
  const header = cols.join(',');
  const rows = batteries.batteries.map((b) => {
    const aliases = (b.aliases ?? []).join('|');
    const ev = b.evidence ?? {};
    return cols
      .map((c) => {
        switch (c) {
          case 'id': return esc(b.id);
          case 'group': return esc(b.group);
          case 'aliases': return esc(aliases);
          case 'standard': return esc(b.standard);
          case 'voltage': return esc(b.voltage);
          case 'capacity_ah': return esc(b.capacity_ah);
          case 'cca': return esc(b.cca);
          case 'cca_basis': return esc(b.cca_basis);
          case 'dimensions_mm': return esc(b.dimensions_mm);
          case 'terminal': return esc(b.terminal);
          case 'technology': return esc(b.technology);
          case 'weight_kg': return esc(b.weight_kg);
          case 'capacity_class': return esc(b.capacity_class ?? '');
          case 'evidence_confidence': return esc(ev.confidence ?? '');
          case 'evidence_date': return esc(ev.date ?? '');
          default: return '';
        }
      })
      .join(',');
  });
  const csv = [header, ...rows].join('\n');
  return new Response(csv, {
    headers: { 'Content-Type': 'text/csv; charset=utf-8' },
  });
}
