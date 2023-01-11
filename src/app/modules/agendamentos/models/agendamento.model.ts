import { Cliente } from "./cliente.model"
import { Medico } from "./medico.model"

export interface Agendamento {
    id?: number
    cliente: Cliente
    medico: Medico
    status: string
    valor: number
    dataAbertura: Date
    dataConsulta: Date
}