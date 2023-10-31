import styled from "styled-components";

export const LightTheme = {
    corFundo: 'white',
    corTexto: 'black',
    corTitulo: 'black', // ajustando para texto preto para melhor visibilidade
    corBotao: 'blue', // adicionando uma cor para o botão
}

export const DarkTheme = {
    corFundo: '#2a0a0a',
    corTexto: 'white',
    corTitulo: '#fffdd0'
}

export const Container = styled.div`
    background-color: ${props => props.theme.corFundo};
    color: ${props => props.theme.corTexto};
`

export const Button = styled.button`
    padding: 10px;
    border: 2px solid ${props => props.theme.corBotao}; /* Adicionando borda ao botão com a cor azul definida no LightTheme */
    background-color: transparent; /* Tornando o fundo do botão transparente para mostrar o fundo da página */
    color: ${props => props.theme.corTexto};
    margin: 10px;
`

export const TitlePage = styled.h1`
    color: ${props => props.theme.corTitulo};
    font-size: 30px;
`

export const InformacoesCep = styled.div`
    margin: 20px;
    display: flex;
    flex-direction: column;
`

export const DivForm = styled.div`
    display: inline;
    background-color: #FFF;
`
