import { z } from "zod";

export const productSchema = z.object({
  name: z.string().min(1, "Product name is required"),
  image: z
    .custom<File>((val) => val instanceof File, {
      message: "Product image should be a valid file",
    }),
  description: z.string().min(1, "Description is required"),
 price: z.coerce.number({ message: "Product price should be a number" }),

});
