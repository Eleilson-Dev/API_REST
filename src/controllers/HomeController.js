import Aluno from '../models/Aluno';

class HomeController {
  async index(req, res) {
    const novoAluno = await Aluno.create({
      nome: 'Elleylson',
      sobrenome: 'Santtos',
      email: 'maxta.gamer@gmail.com',
      idade: 23,
      peso: 75,
      altura: 1.78,
    });

    res.json(novoAluno);
  }
}

export default new HomeController();
