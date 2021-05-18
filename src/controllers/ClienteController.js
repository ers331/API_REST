import Cliente from '../models/Cliente';

class ClienteController {
  async store(req, res) {
    try {
      const novoCliente = await Cliente.create(req.body);
      return res.json({ novoCliente, message: 'Cliente Criado com sucesso' });
    } catch (e) {
      return res.json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  // INdex
  async index(req, res) {
    try {
      const cliente = await Cliente.findAll();
      return res.json(cliente);
    } catch (e) {
      console.log(e);
      return res.json(null);
    }
  }

  // Show

  async show(req, res) {
    try {
      const { id } = req.params;
      const cliente = await Cliente.findByPk(id);
      return res.json(cliente);
    } catch (e) {
      return res.json(null);
    }
  }

  // Update

  async update(req, res) {
    try {
      if (!req.params.id) {
        return res.status(400).json({ status: '400', massage: 'Id invalido!' });
      }
      const cliente = await Cliente.findByPk(req.params.id);
      if (!cliente) {
        return res.status(404).json({
          errors: ['Cliente não existe'],
        });
      }

      const clienteAtualizado = await cliente.update(req.body);
      return res.json({ clienteAtualizado, message: 'Cliente atualizado com sucesso' });
    } catch (e) {
      return res.json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  // delete
  async delete(req, res) {
    try {
      if (!req.params.id) {
        return res.status(400).json({
          errors: ['ID nao enviado'],
        });
      }
      const cliente = await Cliente.findByPk(req.params.id);
      if (!cliente) {
        return res.status(404).json({
          errors: ['Usuario não existe'],
        });
      }

      await cliente.destroy();
      return res.json({ cliente, message: 'Cliente deletado com sucesso' });
    } catch (e) {
      return res.json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }
}

export default new ClienteController();
