import { useForm } from "../../../hooks/useForm"

export function Comments() {
    const { formValues, onSubmit, onChange } = useForm(submitComment, {
        comment: ''
    })
    const submitComment = (value) => {
        console.log(value)
    }
    return (
        <div className="">
            <h2>Comments: </h2>
            <h3>Write a comment: </h3>
            <form onSubmit={onSubmit}>
                <label htmlFor="comment"></label>
                <input type="text" id="comment" name="comment" value={formValues.comment} onChange={onChange} />
            </form>
        </div>
    )
}