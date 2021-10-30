import React from 'react'
import styled from 'styled-components'
import Section from './Section'

function Home() {
    return (
        <Container>
            <Section
                title = "Model S"
                description = "Order Online for Touchless Delivery"
                backgroundImg = 'model-s.jpg'
                leftButton = 'Custom order'
                rightButton = 'Existing Inventorry'
            />
            <Section
                title = "Model Y"
                description = "Order Online for Touchless Delivery"
                backgroundImg = 'model-y.jpg'
                leftButton = 'Custom order'
                rightButton = 'Existing Inventorry'
            />
            <Section
                title = "Model 3"
                description = "Order Online for Touchless Delivery"
                backgroundImg = 'model-3.jpg'
                leftButton = 'Custom order'
                rightButton = 'Existing Inventorry'
            />
            <Section
                title = "Model X"
                description = "Order Online for Touchless Delivery"
                backgroundImg = 'model-x.jpg'
                leftButton = 'Custom order'
                rightButton = 'Existing Inventorry'
            />
            <Section
                title = "Lowest Cost Solar Panels in America"
                description = "Money-back guarantee"
                backgroundImg = 'solar-panel.jpg'
                leftButton = 'Order now'
                rightButton = 'Learn more'
            />
            <Section
                title = "Solar Roof"
                description = "Produce Clean Energy From Your Roof"
                backgroundImg = 'solar-roof.jpg'
                leftButton = 'Order now'
                rightButton = 'Learn more'
            />
            <Section
                title = "Accessories"
                description = ""
                backgroundImg = 'accessories.jpg'
                leftButton = 'Shop now'
                rightButton = ''
            />
        </Container>
    )
}

export default Home

const Container = styled.div`
    height: 100vh;
`