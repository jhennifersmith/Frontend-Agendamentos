export interface AgendamentoGridDTO {
    idAgendamento?: number
    idCliente: number
    nomeCliente: string
    idMedico: number
    nomeMedico: string
    valor: number
    dataAbertura: Date
    dataAtendimento: Date
}
