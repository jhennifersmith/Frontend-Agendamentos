import { Especialidade } from './especialidade.model';
import { Medico } from './medico.model';
export class EspecialidadeMedico {
    id?: number;
    medico?: Medico;
    especialidade: Especialidade;
}