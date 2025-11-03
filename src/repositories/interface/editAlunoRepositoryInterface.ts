import { IUser } from '@/entities/models/userInterface';

export interface IEditAlunoRepository {
  edit(id: number, data: { username?: string; password?: string }): Promise<IUser | null>;
}