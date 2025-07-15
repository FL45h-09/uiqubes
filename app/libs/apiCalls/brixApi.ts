// lib/brixApi.ts
import { api } from '@/middleware/axios/axiosInstance';

export async function getAllBrix() {
  const res = await api.get('/api/brix');
  return res.data;
}

export async function getBrixBySlug(slug: string) {
  const res = await api.get(`/api/brix/${slug}`);
  return res.data;
}
