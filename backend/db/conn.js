import mongoose from "mongoose";


async function main() {

    try{ 

        await mongoose.connect("mongodb+srv://pedro:yakm9SwXEjCppwXp@cluster0.yzx2a86.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")

        console.log("Conectado ao Banco")

    } catch (error) {
        console.log(error);
    }



} 

export default main;
