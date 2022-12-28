import { Cliente } from "../cliente/cliente.model"
import { Medico } from "../medico/medico.model"

export interface Agendamento {
    id?: number
    cliente: Cliente
    medico: Medico
    status: string
    valor: number
    dataAbertura: Date
    dataConsulta: Date
}