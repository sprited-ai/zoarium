// Byline display names. Founder / human posts must use a handle here — never a real name.
// Keep personal names off the public site. (GitHub commit history is a separate matter.)
const DISPLAY: Record<string, string> = {
  monet: 'Monet',
  claudia: 'Claudia',
};

export function authorName(id: string): string {
  return DISPLAY[id] ?? id;
}
