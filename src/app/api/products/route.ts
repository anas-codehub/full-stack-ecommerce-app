import { productSchema } from "@/lib/validators/productSchema";
import { describe } from "node:test";

export async function POST(request: Request) {
    const data = await request.formData()

    let validatedData;

    try{
validatedData = productSchema.parse({
    name: data.get("name"),
    description: data.get("description"),
    price: data.get("price"),
    image: data.get("image"),
})
    }catch(err){
        return Response.json({message: err}, {status: 400})
    }

}