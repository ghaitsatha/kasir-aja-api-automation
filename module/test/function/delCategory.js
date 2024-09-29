import request from "supertest";
import { baseUrl } from "../../data/config.js";

export async function deleteCategory(categoryId,token){
    const response = await request(baseUrl)
    .del("/categories/"+categoryId)
    .set("Authorization","Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjQ5YjJjNzZhLWQ2ZjMtNDM5NS1hZGZhLWFhNmIxOGNjZTZiYiIsImNvbXBhbnlJZCI6ImRlOTMzNWFiLTQyOWUtNDAyZS05ZmI0LTQxZWZlZmQ0MzRlNSIsImlhdCI6MTcyNzYxNzE4NX0.PwPJ6wUpy79h8OSDjPWpB6puLXpucdpuNvP13u-n7Qc")

    return response
}