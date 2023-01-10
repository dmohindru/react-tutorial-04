import SearchBar from './components/SearchBar';
function App() {
    const handleSumbit = (term) => {
        console.log('Do a search with', term);
    }
    return ( 
        <div>
            <SearchBar onSubmit={handleSumbit} />
        </div>
    );
}

export default App;