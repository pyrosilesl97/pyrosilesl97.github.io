/** `2025-03` → "March 2025" / "marzo 2025" / "2025年3月", per locale. */
export function formatMonth(iso: string, locale: string): string {
  const [year, month] = iso.split('-').map(Number);
  if (!month) return String(year);
  const date = new Date(Date.UTC(year, month - 1, 1));
  return new Intl.DateTimeFormat(locale, {
    month: 'long',
    year: 'numeric',
    timeZone: 'UTC',
  }).format(date);
}

export function formatPeriod(
  from: string,
  to: string | null,
  locale: string,
  presentLabel: string,
): string {
  return `${formatMonth(from, locale)} — ${to ? formatMonth(to, locale) : presentLabel}`;
}

/**
 * Elapsed time as e.g. "3 yr 4 mo", using the caller's short unit labels so it
 * reads naturally in every locale (Japanese and Chinese need no space).
 */
export function formatDuration(
  from: string,
  to: string | null,
  yearsShort: string,
  monthsShort: string,
  locale: string,
): string {
  const [fy, fm] = from.split('-').map(Number);
  const end = to ? to.split('-').map(Number) : null;
  const now = new Date();
  const ty = end ? end[0] : now.getUTCFullYear();
  const tm = end ? end[1] : now.getUTCMonth() + 1;

  const total = Math.max(0, (ty - fy) * 12 + (tm - fm)) + 1;
  const years = Math.floor(total / 12);
  const months = total % 12;

  const gap = locale.startsWith('ja') || locale.startsWith('zh') ? '' : ' ';
  const parts: string[] = [];
  if (years > 0) parts.push(`${years}${gap}${yearsShort}`);
  if (months > 0) parts.push(`${months}${gap}${monthsShort}`);
  return parts.join(' ');
}
