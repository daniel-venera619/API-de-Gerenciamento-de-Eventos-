const eventosModel = require("../model/eventosModel");  
    
const buscarTodos = async (req, res) => {
    const eventos = await eventosModel.buscarTodos();

    res.json(eventos);
}
const buscarPorId = async (req, res) => {
    const id= req.params.id;
    const evento = await eventosModel.buscarPorId(id);

    if(!evento){
        return res.status(404).json({
            mensagem: "Evento não encontrado"
        })

    
    }
    res.json(evento);
};
const adicionar = async (req, res) => {
    const {nome, descricao, data, local} = req.body;
    const evento = await eventosModel.adicionar(nome, descricao, data, local);
    
    res.status(201).json(evento);
};
const editar = async (req, res) => {
    const id = req.params.id;
    const {nome, descricao, data, local} = req.body;
    const evento = await eventosModel.buscarPorId(id);

    if(!evento){
        return res.status(404).json({
            mensagem: "Evento não encontrado"
        });
    };
    
    const eventoAtualizado = await eventosModel.editar(id, nome, descricao, data, local);
    res.json(eventoAtualizado);
}; 
const excluir = async (req, res) => {
    const id = req.params.id;
    const evento = await eventosModel.buscarPorId(id);

    if(!evento){
        return res.status(404).json({
            mensagem: "Evento não encontrado"
        });
    };

    await eventosModel.excluir(id);
    res.json({
        mensagem: "Evento excluido com sucesso"
    });
};

module.exports = {
    buscarTodos,
    buscarPorId,
    adicionar,
    editar,
    excluir
};
