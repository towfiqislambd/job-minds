export async function useServerApi<T = any>(
  endpoint: string,
  revalidate = 3600
): Promise<T> {
  const url = `${process.env.NEXT_PUBLIC_SITE_URL}${endpoint}`;
  const res = await fetch(url, {
    cache: "force-cache",
    next: { revalidate },
  });

  if (!res.ok) {
    throw new Error(`Failed to fetch ${endpoint} — ${res.status}`);
  }

  return res.json();
}
