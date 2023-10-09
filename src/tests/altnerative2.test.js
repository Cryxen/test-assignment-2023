import { fireEvent, render, screen } from "@testing-library/react"
import Alternative2 from "../components/Alternative2"

describe('Check render', () => {
    it('Check that counter starts with 0', () => {
        render(<Alternative2 />)

        const paragraph = document.querySelector('p')
        expect(paragraph).toHaveTextContent(0)
    })
})

describe('Check button functionality', () => {
    it('button press once', () => {
        render(<Alternative2 />)

        expect(document.querySelector('p')).toHaveTextContent(0)
        fireEvent.click(screen.getByText('Button counter'))
        expect(document.querySelector('p')).toHaveTextContent(1)
    })
})
