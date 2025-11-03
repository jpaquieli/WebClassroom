import { EditAlunoRepository } from '@/repositories/pg/editAlunoRepository';
import { EditAlunoUseCase } from '../editAluno';

export function makeEditAlunoUseCase() {
    const editAlunoRepository = new EditAlunoRepository();
    const editAlunoUseCase = new EditAlunoUseCase(editAlunoRepository);
    return editAlunoUseCase;
 }