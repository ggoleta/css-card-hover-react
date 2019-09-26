import styled from 'styled-components';

export const Container = styled.div`
    width: 1000px;
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;
export const Card = styled.div`
    position: relative;

    .face {
        width: 300px;
        height: 200px;
        transition: 0.5s;

        &.face1 {
            position: relative;
            background: #333;
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 1;
            transform: translateY(100px);

            & .content{
                opacity: 0.2;
                transition: 0.5s;
            }
        }

        &.face2 {
            position: relative;
            background: #fff;
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 20px;
            box-shadow: 0 20px 50px rgba(0,0,0,0.8);
            transform: translateY(-100px);
        }
    }

    &:hover .face.face1 {
        background: #ff0057;
        transform: translateY(0px);
    }

    &:hover .face.face2 {
        transform: translateY(0px);
    }

    .face.face1 .content {
        h3 {
            margin: 10px 0 0;
            padding: 0;
            color: #fff;
            text-align: center;
            font-size: 1.5em;
        }
    }

    &:hover .face.face1 .content {
        opacity: 1;
    }
`;

export const Content = styled.div`

    svg {
        max-width: 100px;
    }

    p {
        margin: 0;
        padding: 0;
    }

    a {
        margin: 15px 0 0;
        display: inline-block;

        text-decoration: none;
        font-weight: 900;
        color: #333;
        padding: 5px;
        border: 1px solid #333;
    }

    a:hover {
        background: #333;
        color: #fff;
    }
`;
