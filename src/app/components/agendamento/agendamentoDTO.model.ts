export interface AgendamentoDTO {
    id?: number
    clienteId: number
    medicoId: number
    status: number
    valor: number
    dataAbertura: Date
    dataConsulta: Date
}
