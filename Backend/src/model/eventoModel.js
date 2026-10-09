const db = require("../config/database")

const buscarTodos = async () => {
    const [eventos] = await db.query(
        "SELECT * FROM evento"
    );
    return eventos;
}
const buscarPorId = async (id) => {
    const [evento] = await db.query(
        "SELECT * FROM evento WHERE id = ?",
        [id]
    );
    return evento;
}
const adicionar = async (evento) => {
    const { nome, descricao, data, local } = evento;
    const [resultado] = await db.query(
        "ISERT INTO evento (nome, descricao, data, local) VALUES (?, ?, ?, ?)",
        [nome, descricao, data, local]
    )
    return {
        id: resultado.insertId,
        nome,
        descricao,
        data,
        local
    };
        
}

module.exports = {
    buscarTodos,
    buscarPorId
};