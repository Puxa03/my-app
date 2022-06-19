import styled from "styled-components";

export const Container = styled.div`

    ul {
        display:flex;
        flex-wrap:wrap;
        row-gap:20px;
        column-gap:20px;
        justify-content: space-evenly;
    }

    li{
        background-color : lightcyan;
        border-radius: 15px;
        padding:10px;
    }
`;