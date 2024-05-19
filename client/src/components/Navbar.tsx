import { Layout, Menu, Row } from 'antd'
import { FC } from 'react'

const Navbar: FC = () => {
	return (
		<Layout.Header>
			<Row justify={'end'}>
				<Menu theme='dark' mode='horizontal' style={{ flex: 1, minWidth: 0, justifyContent: 'flex-end' }}>
					<Menu.Item key={1}>Логин</Menu.Item>
					<Menu.Item key={2}>Логин</Menu.Item>
					<Menu.Item key={3}>Логин</Menu.Item>
					<Menu.Item key={4}>Логин</Menu.Item>
					<Menu.Item key={5}>Логин</Menu.Item>
					<Menu.Item key={6}>Логин</Menu.Item>
					<Menu.Item key={7}>Логин</Menu.Item>
				</Menu>
			</Row>
		</Layout.Header>
	)
}

export default Navbar
