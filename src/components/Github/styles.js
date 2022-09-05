import styled from 'styled-components'

export const GithubContainer = styled.div`
    width: 50%;
    padding: 0 0.5rem 0.7rem;    
`;

export const GithubContents = styled.div`
    width: 100%;    
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

export const GithubContent = styled.div`
    background-color: rgba(0, 0, 0, 0.4);
    padding: 0.7rem 0.5rem 0.7rem;
    border-radius: 10px;
    width: 100%;
    border-bottom: 0.1rem solid #3f3d56;
    display: flex;
    justify-content: space-between;
    margin-bottom: 1rem;
`;

export const Title = styled.div`
    a {
        text-decoration: none;
        color: #fff;
        font-weight: 700;

        &:hover {
            color: rgb(85, 84, 255);
        }
    }
`;

export const Stars = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;