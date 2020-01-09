import React from 'react'
import { connect } from 'dva';
import { Button } from 'antd'
const Home = ({ app, dispatch }) => {

    const handleClick = () => {
        dispatch({
            type: 'app/SETNAME',
            name: 'this is new name'
        })
    }

    return (
        <>
            <h1>{app.name}</h1>
            <Button onClick={handleClick}>点我点我</Button>
        </>
    )
}

export default connect(
    ({ app }) => ({ app })
)(Home)