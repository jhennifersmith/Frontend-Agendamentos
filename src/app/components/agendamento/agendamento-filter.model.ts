export interface AgendamentoFilter {
    nomeCliente?: string
    nomeMedico?: string
    dataAberturaInicio?: Date
    dataAberturaFim?: Date
    dataConsultaInicio?: Date
    dataConsultaFim?: Date
    valorInicio?: number
    valorFim?: number
    page?: number
    pageSize?: number
}