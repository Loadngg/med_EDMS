import React from 'react'
import Home from '../pages/Home'

export interface IRoute {
	index?: boolean
	path: string
	component: React.ComponentType
}

export enum RouteNames {
	HOME = '/',
}

export const SiteRoutes: IRoute[] = [{ index: true, path: RouteNames.HOME, component: Home }]
