import { z } from "zod";

export const checkoutSchema = z.object({
  nama: z.string().min(3, "Nama minimal 3 karakter"),

  alamat: z.string().min(10, "Alamat minimal 10 karakter"),

  telepon: z
    .string()
    .min(12, "Nomor telepon minimal 12 digit")
    .regex(/^[0-9]+$/, "Nomor telepon hanya boleh angka"),
});
