import { Wrapper } from "./StyledComponents"
type AddressData = {
    street: string,
    city: string,
    state: string,
    zip: string
}
type AddressFormProps = AddressData & {
    updateFields: (fields: Partial<AddressData>) => void
}
const AddressForm = ({ street, city, state, zip, updateFields }: AddressFormProps) => {
    return (
        <Wrapper >
            <h2>Address</h2>
            <div>
                <label >Street</label>
                <input type="text" autoFocus required />
                <label >City</label>
                <input type="text" required />
                <label>State</label>
                <input type="text" required />
                <label>Zip Code</label>
                <input type="text" required />
            </div>
        </Wrapper>
    )
}

export default AddressForm