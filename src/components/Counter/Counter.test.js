import Counter from "."
import { render , screen , fireEvent} from "@testing-library/react"

describe('Counter Component Related Test Cases :' , () => {

    it('If counter renders initial values from props' , () => {
       const value = 10;
       render(<Counter initialValue={value}/>);
       expect(screen.getByText(`${value}`)).toBeInTheDocument();
    })

    it('If decrement button descreasing the displayed value' , () => {
        let value = 10;
        render(<Counter initialValue={value}/>);
        fireEvent.click(screen.getByText(/decrement/i));
        expect(screen.getByText(`${--value}`)).toBeInTheDocument();
     })

     it('If increment button increasing the displayed value' , () => {
        let value = 10;
        render(<Counter initialValue={value}/>);
        fireEvent.click(screen.getByText(/increment/i));
        expect(screen.getByText(`${++value}`)).toBeInTheDocument();
     })
})