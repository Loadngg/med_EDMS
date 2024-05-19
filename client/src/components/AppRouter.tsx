import { FC } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { RouteNames, SiteRoutes } from '../routes'

const AppRouter: FC = () => {
	return (
		<Routes>
			{SiteRoutes.map(route => (
				<Route index={route.index} path={route.path} element={<route.component />} key={route.path} />
			))}
			<Route path='*' element={<Navigate to={RouteNames.HOME} replace />} />
		</Routes>
	)
}

export default AppRouter
