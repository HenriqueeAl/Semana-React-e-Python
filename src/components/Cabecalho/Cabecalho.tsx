import { CabecalhoContainer, Logo } from "./Cabecalho.style"

export const Cabecalho = ()=>{
    return (
    <CabecalhoContainer>
        <div>
            <Logo src='images/myteacher.png'>

            </Logo>
            <p>Encontre o professor perfeito!</p>
        </div>
    </CabecalhoContainer>
    )
}