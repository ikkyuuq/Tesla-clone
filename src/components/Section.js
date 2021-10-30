import React from 'react'
import styled from 'styled-components'
import Fade from 'react-reveal/Fade';

function Section({ title, description, backgroundImg, leftButton, rightButton }) {
    return (
        <Wrap bgImage = { backgroundImg }>
            <Fade bottom>
            <ItemText>
                <h1>{ title }</h1>
                <p>{ description }</p>
            </ItemText>
            </Fade>

            <Fade>
            <Buttons>
            <ButtonGroup>
                <LeftButton>
                    { leftButton }
                </LeftButton>
                { rightButton && 
                    <RightButton>
                        { rightButton }
                    </RightButton>
                }
            </ButtonGroup>
            
            <DownArrow src='/images/down-arrow.svg'></DownArrow>
            </Buttons>
            </Fade>
        </Wrap>
    )
}

export default Section

const Wrap = styled.div`
    width: 100vw;
    height: 100vh;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    display: flex;
    flex-direction: column; 
    justify-content: space-between; //vertical
    align-items: center; //horizontal
    background-image: ${props => `url("/images/${props.bgImage}")`}
`

const ItemText = styled.div`
    h1 {
        font-weight: 500;
    }
    padding-top: 15vh;
    text-align: center;
`

const ButtonGroup = styled.div`
    display: flex;
    margin-bottom: 30px;
    @media (max-width: 768px){
        flex-direction: column;
    }
`

const LeftButton = styled.div`
    background-color: rgba(23, 26, 32, 1);
    height: 40px;
    width: 256px;
    border-radius: 100px;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    opacity: .9;
    text-transform: uppercase;
    font-size: 12px;
    cursor: pointer;
    margin: 8px
`

const RightButton = styled(LeftButton)`
    background-color: white;
    color: #343c41;
`

const DownArrow = styled.img`
    height: 40px;
    overflow-x: hidden;
    animation: animateDown infinite 1.5s;
    color: #343c41;
`

const Buttons = styled.div`

`
