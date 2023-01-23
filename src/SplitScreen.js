import styled from 'styled-components';

const Container = styled.div`
    display:flex
   `;

const Pane = styled.div`
    flex : 1
`;
export const SplitScreen = ({left : Left, rigit : Right} ) => {
    return(
        <Container>
            <Pane>
                <Left />
            </Pane>
            <Pane>
                <Right />
            </Pane>
        </Container>
    )
}
    
