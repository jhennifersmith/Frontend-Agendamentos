import { Especialidade } from './../especialidade/especialidade.model';
import { Medico } from './../medico/medico.model';
export class EspecialidadeMedico {
    id?: number;
    medico?: Medico;
    especialidade: Especialidade;
}