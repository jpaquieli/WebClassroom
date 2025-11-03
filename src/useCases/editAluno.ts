import { IEditAlunoRepository } from "@/repositories/interface/editAlunoRepositoryInterface";
import { IUser } from '@/entities/models/userInterface';

export class EditAlunoUseCase {
  constructor(private editAlunoRepository: IEditAlunoRepository) {}

  public async handler(id: number, data: { username?: string; password?: string }): Promise<IUser | null> {
    const updatedUser = await this.editAlunoRepository.edit(id, data);
    return updatedUser;
  }
}