function SearchBar({ onSubmit }) {

    const handleFormSumbit = (event) => {
        // prevent default form submission behaviour of browser
        event.preventDefault();

        onSubmit('cars');

        
    };
     
    return ( 
        <div>
            <form onSubmit={handleFormSumbit}>
                <input />
            </form>
        </div>
    );
}

export default SearchBar;