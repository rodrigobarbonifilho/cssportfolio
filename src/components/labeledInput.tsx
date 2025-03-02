const LabeledInput = () => {
    return (
        <div className="rounded border-solid border-2 border-neutralDeep">
            <label htmlFor="search"></label>
            <input className="w-full" name="search" type="text" />
        </div>
    )
}

export default LabeledInput