import { formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import { Children, useContext } from 'react'
import { CyclesContext } from '../../contexts'
import {
  HistoryListStyled,
  HistoryStatusStyled,
  HistoryStyled,
} from './History.styles'

export function History() {
  const { cycles } = useContext(CyclesContext)

  return (
    <HistoryStyled>
      <h1>Meu histórico</h1>

      <HistoryListStyled>
        <table>
          <thead>
            <tr>
              <th>Tarefa</th>
              <th>Duração</th>
              <th>Início</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {Children.toArray(
              cycles.map((cycle) => (
                // eslint-disable-next-line react/jsx-key
                <tr>
                  <td>{cycle.task}</td>
                  <td>{cycle.minutesAmount} minutos</td>
                  <td>
                    {formatDistanceToNow(new Date(cycle.startDate), {
                      addSuffix: true,
                      locale: ptBR,
                    })}
                  </td>
                  <td>
                    {cycle.finishedDate && (
                      <HistoryStatusStyled statusColor="green">
                        Concluído
                      </HistoryStatusStyled>
                    )}
                    {cycle.interruptedDate && (
                      <HistoryStatusStyled statusColor="red">
                        Interrompido
                      </HistoryStatusStyled>
                    )}

                    {!cycle.finishedDate && !cycle.interruptedDate && (
                      <HistoryStatusStyled statusColor="yellow">
                        Em andamento
                      </HistoryStatusStyled>
                    )}
                  </td>
                </tr>
              )),
            )}
          </tbody>
        </table>
      </HistoryListStyled>
    </HistoryStyled>
  )
}
