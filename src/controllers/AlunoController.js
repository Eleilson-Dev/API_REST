import Aluno from '../models/Aluno';

class AlunoController {
  async index(req, res) {
    const alunos = await Aluno.findAll();
    return res.json(alunos);
  }

  async store(req, res) {
    try {
      const { email } = req.body;
      const alunoExists = await Aluno.findOne({ where: { email } });

      if (alunoExists) {
        return res.status(401).json({
          errors: ['Aluno já existe'],
        });
      }

      const novoAluno = await Aluno.create(req.body);

      res.json(novoAluno);
    } catch (err) {
      return res.status(401).json({
        errors: err.errors.map((err) => {
          return err.message;
        }),
      });
    }
  }

  //Show
  async show(req, res) {
    try {
      const aluno = await Aluno.findByPk(req.params.id);
      return res.json(aluno);
    } catch (err) {
      return res.json(null);
    }
  }

  async update(req, res) {
    try {
      const aluno = await Aluno.findByPk(req.params.id);

      if (!aluno) {
        return res.status(400).json({
          errors: ['Aluno não existe'],
        });
      }

      const novosDados = await aluno.update(req.body);

      return res.json(novosDados);
    } catch (err) {
      return res.status(400).json({
        errors: err.errors.map((err) => {
          return err.message;
        }),
      });
    }
  }

  async delete(req, res) {
    try {
      const aluno = await Aluno.findByPk(req.params.id);

      if (!aluno) {
        return res.status(400).json({
          errors: ['Aluno não existe'],
        });
      }

      await aluno.destroy();

      res.json({
        msg: ['Aluno Deletado', aluno],
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

export default new AlunoController();
