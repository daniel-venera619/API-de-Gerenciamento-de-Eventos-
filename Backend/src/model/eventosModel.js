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
    return evento [0];
}
const adicionar = async(nome, descricao, data, local) =>{
    const [evento] = await db.query(
        "INSERT INTO evento (nome, descricao, data, local) VALUES (?, ?, ?, ?)",
        [nome, descricao, data, local]
    );
    return {
        id: evento.insertId,
        nome,
        descricao,
        data,
        local
    };
        
}
const editar = async (id, nome, descricao, data, local) => {
        await db.query(
            "UPDATE evento SET nome = ?, descricao = ?, data = ?, local = ? WHERE id = ?",
            [nome, descricao, data, local, id]
    );
    return {
        id,
        nome,
        descricao,
        data,
        local
    };
 
};
  const excluir = async (id) => {
        const [resultado] = await db.query(
            "DELETE FROM evento WHERE id = ?",
            [id]
        );
        return resultado.affectedRows;
    };
    
module.exports = {
    buscarTodos,
    buscarPorId,
    adicionar,
    editar,
    excluir
};