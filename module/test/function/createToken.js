import request from "supertest";
import { baseUrl } from "../../data/config.js";


export async function createToken(){
    const payload = {
        "email" : "toko.qa@test.com",
        "password" : "adm123!"
    }
    //send request
    const response = await request (baseUrl)
        .post("/auth") //endpoint
        .send(payload)  //request body
        
    
    const token = (await response).body.token
    return token
    
}