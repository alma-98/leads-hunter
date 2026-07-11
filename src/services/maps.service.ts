export interface MapsSearchRequest {
  keyword: string;
  location: string;
  limit: number;
}

export async function startMaps(
  data: MapsSearchRequest
) {
  return window.api.startMaps(data);
}

export async function stopMaps() {
  return window.api.stopMaps();
}
