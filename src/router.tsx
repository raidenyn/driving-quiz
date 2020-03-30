import React, {useCallback} from "react";
import {BrowserRouter, Route} from 'react-router-dom'
import SessionQuestionContainer from "./containers/SessionQuestionContainer";
import SearchQuestionContainer from "./containers/SearchResultContainer";
import MainLayoutContainer from "./containers/MainLayoutContainer";

export const Router: React.FunctionComponent = () => (
    <BrowserRouter >
        <LayoutRouter path="/search" component={SearchQuestionContainer} layout={MainLayoutContainer} exact />
        <LayoutRouter path="/" component={SessionQuestionContainer} layout={MainLayoutContainer}  exact />
    </BrowserRouter>
)

const LayoutRouter: React.FunctionComponent<typeof Route.prototype.props & { layout: React.FunctionComponent }> =
    ({
         component, layout, ...props
    }) => {
    const LayoutComponent = useCallback(
        (() => {
            const Layout = layout
            const Component = component
            return (
                <Layout>
                    <Component />
                </Layout>
            )
        }) as React.FunctionComponent,
        [layout, component]
    )

    return <Route component={LayoutComponent} {...props} />
}
