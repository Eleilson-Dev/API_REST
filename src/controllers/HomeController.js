import Aluno from '../models/Aluno';

class HomeController {
  async index(req, res) {
    const novoAluno = await Aluno.create({
      nome: 'Mara',
      sobrenome: 'silva',
      email: 'maria@gmail.com',
      idade: 25,
      peso: 65,
      altura: 1.67,
    });

    return res.json(novoAluno);
  }
}

export default new HomeController();
