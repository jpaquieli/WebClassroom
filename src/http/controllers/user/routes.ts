import { Router } from 'express';
import { createProfessor } from './createProfessor';
import { createAluno } from './createAluno';
import { signin } from './signIn';
import { findAllProfessor } from './findAllProfessor';
import { findAllAluno } from './findAllAluno';

const userRouter = Router();

userRouter.post('/user/professor', createProfessor);
userRouter.post('/user/aluno', createAluno);
userRouter.post('/user/signin', signin);
userRouter.get('/user/professor', findAllProfessor);
userRouter.get('/user/aluno', findAllAluno);

export default userRouter;