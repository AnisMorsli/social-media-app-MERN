import React from 'react'
import { Row } from 'antd'
import Story from '../Story'

function StoryList() {
    return (
        <>
            <Row gutter={[48, 32]}>
                <Story />
                <Story />
            </Row>

        </>
    )
    }     

export default StoryList