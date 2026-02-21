import Cliente from "../models/Cliente";

class ClienteService {
  async listar() {
    return await Cliente.findAll();
  }

  async obter(id: number) {
    return await Cliente.findByPk(id);
  }

  async criar(nome: string, email: string) {
    return await Cliente.create({ nome, email });
  }

  async atualizar(id: number, nome: string, email: string) {
    const cliente = await Cliente.findByPk(id);
    if (cliente) {
      cliente.nome = nome;
      cliente.email = email;
      await cliente.save();
    }
    return cliente;
  }

  async excluir(id: number) {
    const cliente = await Cliente.findByPk(id);
    if (cliente) {
      await cliente.destroy();
    }
  }
}

export default new ClienteService();
