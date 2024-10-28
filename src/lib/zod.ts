
import { object, string } from "zod";

export const signInSchema = object({
    email: string({ required_error: "Email gereklidir." })
        .min(1, "Email gereklidir")
        .email("Geçersiz email adresi"),
    password: string({ required_error: "Şifre gereklidir" })
        .min(1, "Şifre gereklidir")
        .min(8, "Şifreniz en az 8 karakterden oluşmalıdır.")
        .max(32, "Şifreniz 32 karakterden fazla olamaz."),
});