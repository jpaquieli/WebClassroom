import { Router } from 'express';
import { create } from './create';
import { signin } from './signIn';
import { findAllProfessor } from './findAllProfessor';
import { findAllAluno } from './findAllAluno';

const userRouter = Router();

userRouter.post('/user', create);
userRouter.post('/user/signin', signin);
userRouter.get('/user/professor', findAllProfessor);
userRouter.get('/user/aluno', findAllAluno);

export default userRouter;