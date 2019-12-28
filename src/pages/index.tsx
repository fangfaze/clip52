import React from 'react';
import styles from './index.css';
import { connect } from 'dva'
import { List, Button, Anchor } from 'antd';
import 'antd/dist/antd.css'
const { Link } = Anchor

const Main = ({ dispatch, main, data }) => {
  const Player = () => {
    return (<div>我是{main.playerName},我有一个{main.item},我想要一个{main.target}</div>)
  }
  
  const listRenderItem = ( item: { value: number; text: React.ReactNode; } ) => {
    {
      const show = main.value - item.value
      return (
        <List.Item>
          <Button type="primary" disabled={show > 2 || show < -2} > 交换 {show}</Button>
          {item.text}
        </List.Item>
      )
    }
  }

  return (
    <div className={styles.normal}>
      <List
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
