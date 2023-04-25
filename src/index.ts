import { Schema, model, connect } from "mongoose";

interface IUser {
	name: string;
	cpf: string;
	senha: string;
}

const userSchema = new Schema<IUser>({
	name: { type: String, required: true },
	cpf: { type: String, required: true, unique: true },
	senha: { type: String, required: true },
});

const random = () => {
	return `${Math.floor(Math.random() * 5000)}kk`;
};

const User = model<IUser>("User", userSchema);

run2().catch((err) => console.log(err));

async function run2() {
	await connect("mongodb://127.0.0.1:27017/teste").then((el) => {
		console.log("Conectado");
	});
	const result = await User.find().exec();

	console.log(result);
}

import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

run().catch((el) => console.log(el));

async function run() {
	await prisma.users.findMany().then((el) => console.log(el));
}
