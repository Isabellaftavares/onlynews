import database from "../../../../infra/database";

async function status(request, response) {
  const result = await database.query("SELECT 1 + 1; ")
  console.log(result)
  response.status(200).json({ chave: "são acima da média" });
}

export default status;