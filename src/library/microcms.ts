// src/library/microcms.ts
import { createClient } from "microcms-js-sdk";

export const client = createClient({
  serviceDomain: import.meta.env.MICROCMS_SERVICE_DOMAIN,
  apiKey: import.meta.env.MICROCMS_API_KEY,
});

export type GalleryAngle = {
  src: {
    url: string;
  };
  label: string;
};

export type GalleryItem = {
  id: string;
  styleName: string;
  styleMenu: string;
  category: string; // 'short' | 'medium' | 'color' | 'perm'
  images?: GalleryAngle[];
};

export type GalleryResponse = {
  totalCount: number;
  offset: number;
  limit: number;
  contents: GalleryItem[];
};

export type MenuItem = {
  id: string;
  title: string;
  price: string;
  category?: string;
  description?: string;
  isTop?: boolean;
  sortOrder?: number; // ★ 追加
  info?: string;
};


export type StaffItem = {
  id: string;
  nameJa: string;
  nameEn: string;
  post: string;
  sortOrder?: number; // ★ 追加
  profileImage?: {
    url: string;
    height?: number;
    width?: number;
  };
  message?: string;
  specialty?: string;
  career?: string;
  hobby?: string;
};


