import { Wrapper } from "./StyledComponents"

type UserData = {
    firstName: string,
    lastName: string,
    age: string,
}
type UserFormProps = UserData & {
    updateFields: (fields: Partial<UserData>) => void
}

const UserForm = ({ firstName, lastName, age, updateFields }: UserFormProps) => {
    return (
        <Wrapper >
            <h2>User Details</h2>
            <div>
                <label >First Name</label>
                <input value={firstName} onChange={(e) => {
                    updateFields({ firstName: e.target.value })
                }} type="text" autoFocus required />
                <label >Last Name</label>
                <input value={lastName} onChange={(e) => {
                    updateFields({ lastName: e.target.value })
                }} type="text" required />
                <label>Age</label>
                <input value={age} onChange={(e) => {
                    updateFields({ age: e.target.value })
                }} type="number" required min={1} />
            </div>
        </Wrapper>
    )
}

export default UserForm