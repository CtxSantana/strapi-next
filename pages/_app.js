import Layout from '../components/Layout'
import withData from '../lib/apollo'

import defaultPage from '../hocs/defaultPage'
import { compose } from "recompose"
import App, { Container } from 'next/app'
import React from 'react'

class MyApp extends App {
	static async getInitialProps({ Component, router, ctx }) {
		let pageProps = {}
		console.log("context ")
		console.log()
		if (Component.getInitialProps) {
			pageProps = await Component.getInitialProps(ctx)
		}
		return { pageProps }
	}

	render() {
		const { Component, pageProps, isAuthenticated, ctx } = this.props
		return (
			<Container>
				<Layout isAuthenticated={isAuthenticated} {...pageProps}>
					<Component {...pageProps} />
				</Layout>
				<style jsx global>
					{`
						a {
							color: white !important;
						}
						a:link {
							text-decoration: none !important;
							color: white !important;
						}
						a:hover {
							color: white;
						}
						.card {
						display: flex !important;
						}
					`}
				</style>
			</Container>
		)
	}
}
export default withData(MyApp)
