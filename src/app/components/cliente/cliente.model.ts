import { Pessoa } from './pessoa.model';
import { Email } from "./email.model"
import { Telefone } from "./telefone.model"

export class Cliente {
    id?: number
    telefones: Telefone[]
    emails: Email[]
    dataCriacao: Date
    dataExclusao: Date
    pessoa: Pessoa
}