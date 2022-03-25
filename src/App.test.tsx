import { render, screen } from '@testing-library/react'
import App from './App'

test('renders router', () => {
    render(<App />)
    const linkElement = screen.getByText(/Router/i)
    expect(linkElement).toBeInTheDocument()
})
