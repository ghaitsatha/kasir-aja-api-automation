import request from "supertest";
import { baseUrl } from "../../data/config.js";

export async function addCategory(){
    const payload = {
        "name": "Junk Food",
        "description": "makanan cepat saji"
    }

    const response = await request (baseUrl)
        .post("/categories")
        .send(payload)
        .set("Authorization","Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjQ5YjJjNzZhLWQ2ZjMtNDM5NS1hZGZhLWFhNmIxOGNjZTZiYiIsImNvbXBhbnlJZCI6ImRlOTMzNWFiLTQyOWUtNDAyZS05ZmI0LTQxZWZlZmQ0MzRlNSIsImlhdCI6MTcyNzYxNzE4NX0.PwPJ6wUpy79h8OSDjPWpB6puLXpucdpuNvP13u-n7Qc")

    return(await response)
    }