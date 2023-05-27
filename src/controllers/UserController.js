import User from '../models/User';

class UserController {
  async store(req, res) {
    try {
      const { email } = req.body;
      const userExists = await User.findOne({ where: { email } });

      if (userExists) {
        return res.status(401).json({
          errors: ['Usuário já existe'],
        });
      }

      const novoUser = await User.create(req.body);

      const { id, nome, created_at, updated_at } = novoUser;
      res.json({ id, nome, email, created_at, updated_at });
    } catch (err) {
      return res.status(400).json({
        errors: err.errors.map((err) => {
          return err.message;
        }),
      });
    }
  }

  //Index
  async index(req, res) {
    try {
      const users = await User.findAll({
        attributes: ['id', 'nome', 'email', 'created_at', 'updated_at'],
      });

      return res.json(users);
    } catch (err) {
      return res.json(null);
    }
  }

  //Show
  async show(req, res) {
    try {
      const user = await User.findByPk(req.params.id);
      const { id, nome, email } = user;
      return res.json({ id, nome, email });
    } catch (err) {
      return res.json(null);
    }
  }

  //Update
  async update(req, res) {
    try {
      const user = await User.findByPk(req.userId);

      if (!user) {
        return res.status(400).json({
          errors: ['usuário não existe'],
        });
      }

      const novosDados = await user.update(req.body);
      const { id, nome, email, created_at, updated_at } = novosDados;

      return res.json({ id, nome, email, created_at, updated_at });
    } catch (err) {
      return res.status(400).json({
        errors: err.errors.map((err) => {
          return err.message;
        }),
      });
    }
  }

  // Delete
  async delete(req, res) {
    try {
      const user = await User.findByPk(req.userId);

      if (!user) {
        return res.status(400).json({
          errors: ['usuário não existe'],
        });
      }

      await user.destroy();

      const { id, nome, email, created_at, updated_at } = user;
      res.json({
        msg: ['User Deletado', { id, nome, email, created_at, updated_at }],
      });
    } catch (err) {
      return res.status(400).json({
        errors: err.errors.map((err) => {
          return err.message;
        }),
      });
    }
  }
}

export default new UserController();
