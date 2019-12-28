import React from 'react';
import styles from './index.css';
import { connect } from 'dva'
import { List, Button, Alert } from 'antd';
import 'antd/dist/antd.css'

const Main = ({ dispatch, main, data }) => {
  const Player = () => {
    if (main.value === 63) {
      return (
        <Alert message='你得到了别墅!' type="success" showIcon />
      )
    }
    return (
      <div>你想要一个<span>{main.target}</span>,现在我有一个<span>{main.text}</span>,我想我可以用它交换到...... </div>
    )

  }
  const change = (item: { index: number; value: number; text: string; }) => {
    const dataChange = { index: item.index, value: main.value, text: main.text }
    const mainChange = item

    dispatch({
      type: 'main/change',
      playload: mainChange,
    })
    dispatch({
      type: 'data/change',
      playload: dataChange
    })
  }
  const listRenderItem = (item: { index: number; value: number; text: string; }) => {
    {
      const show = main.value - item.value
      const disabled = ([7, 5, 2, 0, -1, -3].indexOf(show) === -1) || main.value === 63;
      return (
        <List.Item className="item-btn" >
          <Button type="primary" disabled={disabled} block onClick={() => { change(item) }}>{item.text} </Button>
        </List.Item>
      )
    }
  }
  const grid = {
    xs: 2, sm: 3, md: 4, lg: 4, xl: 4, xxl: 6
  }

  return (
    <div className={styles.normal}>
      <List
        grid={grid}
        header={<Player />}
        bordered={true}
        dataSource={data}
        renderItem={listRenderItem}
      />
    </div>
  )
}

const mapping = ({ main, data }) => {
  return ({ main, data: data.list })
}

export default connect(mapping)(Main);
