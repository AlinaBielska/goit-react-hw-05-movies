import PropTypes from 
const FormSearch = ({ onSubmit }) => {
    return (
        <form onSubmit={onSubmit}>
            <input name="query"></input>
            <button type="submit">
                Search
            </button>
        </form>
    )
};

export default FormSearch;