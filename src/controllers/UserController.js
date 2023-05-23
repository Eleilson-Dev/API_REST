import User from '../models/User';

class UserController {
  async store(req, res) {
    try {
      const novoUser = await User.create(req.body);

      res.json(novoUser);
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
    const { id } = req.params;
    try {
      const user = await User.findByPk(id);
      return res.json(user);
    } catch (err) {
      return res.json(null);
    }
  }

  //Update
  async update(req, res) {
    try {
      const { id } = req.params;
      if (!id) {
        return res.status(400).json({
          errors: ['ID não enviado'],
        });
      }

      const user = await User.findByPk(id);

      if (!user) {
        return res.status(400).json({
          errors: ['usuário não existe'],
        });
      }

      const novosDados = await user.update(req.body);

      return res.json(novosDados);
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
      const { id } = req.params;
      if (!id) {
        return res.status(400).json({
          errors: ['ID não enviado'],
        });
      }

      const user = await User.findByPk(id);

      if (!user) {
        return res.status(400).json({
          errors: ['usuário não existe'],
        });
      }

      await user.destroy();

      return res.json(user);
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
