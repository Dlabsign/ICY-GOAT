// src/types/interfaces.ts
export interface Destination {
  name: string;
  subtitle: string;
  description: string;
  image: string;
}

export interface Negara {
  id: string; // Tambahkan id untuk mencocokkan data MapModel
  negara: string;
  videoProfile: string;
  tentang: {
    image: string;
    title: string;
    deskripsi: string;
  }[];
  destinations: Destination[];
}
