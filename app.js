import React from 'react'
import ReactDom from 'react-dom'
import { Button } from 'antd'
const App = () => {
    return <Button>123</Button>
}

ReactDom.render(<App />, document.querySelector('#root'))