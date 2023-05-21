import User from '../models/User';

class UserController {
  async store(req, res) {
    try {
      const novoUser = await User.create(req.body);

      res.json(novoUser);
    } catch (err) {
      res.status(400).json({
        errors: err.errors.map((err) => {
          return err.message;
        }),
      });
      console.log(err);
    }
  }
}

export default new UserController();
