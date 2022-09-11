import styled from 'styled-components'

export const GithubContainer = styled.div`
    width: 50%;
    padding: 0 0.5rem 0.7rem;  
    
    @media (max-width: 1200px) {
        width: 70%;
    }

    @media (max-width: 768px) {
        width: 100%;
    }
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
        font-size: 1.2rem;

        &:hover {
            color: rgb(85, 84, 255);
        }
    }
    
    p {
        font-size: 0.8rem;
        font-weight: 700;
        color: #aaaaaa;
        text-align: left;
    }
`;

export const Stars = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const SeeMore = styled.div`
    text-align: right;
    
    a {
        color: #fff;
        text-decoration: none;

        &:hover {
            color: rgb(85, 84, 255);
        }
    }
`;