"use strict";
let clientes = [];
const inserirCliente = (cliente) => {
    clientes.push(cliente);
    console.log("Cliente inserido: ", cliente);
};
const listarClientes = () => {
    console.log("Lista de clientes: ", clientes);
};
const atualizarCliente = (id, novosDados) => {
    clientes = clientes.map(cliente => cliente.id === id ? { ...cliente, ...novosDados } : cliente);
    console.log(`Cliente ${id} atualizado.`);
};
const deletarCliente = (id) => {
    clientes = clientes.filter(cliente => cliente.id !== id);
    console.log(`Cliente ${id} removido.`);
};
inserirCliente({ id: 1, nome: "Eduardo", idade: 30 });
inserirCliente({ id: 2, nome: "Maria", idade: 25 });
inserirCliente({ id: 3, nome: "João", idade: 40 });
listarClientes();
atualizarCliente(2, { idade: 26, nome: "Maria Silva" });
listarClientes();
//# sourceMappingURL=script.js.map