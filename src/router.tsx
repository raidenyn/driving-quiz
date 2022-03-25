import React, {useCallback} from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import SessionQuestionContainer from './containers/SessionQuestionContainer'
import SearchQuestionContainer from './containers/SearchResultContainer'
import MainLayoutContainer from './containers/MainLayoutContainer'

export const Router: React.FunctionComponent = () => (
    <BrowserRouter>
        <Routes>
            <Route path="/search" element={<Page component={SearchQuestionContainer} />} />
            <Route path="/" element={<Page component={SessionQuestionContainer} />} />
        </Routes>
    </BrowserRouter>
)

const Page: React.FunctionComponent<{ component: React.FunctionComponent, layout?: React.FunctionComponent }> =
    ({
        component, layout,
    }) => {
        const LayoutComponent = useCallback(
            () => {
                const Layout = layout ?? MainLayoutContainer
                const Component = component
                return (
                    <Layout>
                        <Component />
                    </Layout>
                )
            },
            [layout, component],
        )

        return LayoutComponent()
    }
