export function getApiBase(): string {
  const config = useRuntimeConfig();
  const apiBase = config.public.apiBase;

  if (!apiBase) {
    throw new Error('API Base not found!');
  }

  return apiBase;
}