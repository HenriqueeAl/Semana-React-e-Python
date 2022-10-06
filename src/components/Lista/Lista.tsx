import { Button } from "@mui/material"
import { Professor } from "../../@types/professor"
import { Descricao, Foto, Imformacao, ItemLista, ListaStyled, ListaVazia, Nome, Valor } from "./Lista.style"

interface ListaProps {
    professores: Professor[],
}

export const Lista = ( props: ListaProps)=>{
    return(
        <div>
            {props.professores.length > 0 ? (
            <ListaStyled>
                {props.professores.map(professor=> (
                <ItemLista key={professor.id}>
                    <Foto src={professor.foto}>
                    </Foto>
                    <Imformacao>
                        <Nome>{professor.nome}</Nome>
                        <Valor>{professor.valor_hora.toLocaleString('pt-BR', {minimumFractionDigits: 2, style: 'currency', currency: 'BRL'})}</Valor>
                        <Descricao>{professor.descricao}</Descricao>
                        <Button sx={{width: '70%'}}>Marcar Aula com {professor.nome}</Button>
                    </Imformacao>
                </ItemLista>
                ))}
            </ListaStyled>
            ) : (
                <ListaVazia>Nenhum item encontrado</ListaVazia>
            )}
        </div>
    )
}