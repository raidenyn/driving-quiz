import { render, screen } from '@testing-library/react'

jest.mock('./router', () => ({
    Router: () => (<div>Router</div>),
}))

import App from './App'

describe('App', () => {
    it('should renders router', () => {
        render(<App />)
        const linkElement = screen.getByText(/Router/i)
        expect(linkElement).toBeInTheDocument()
    })
})
