import SearchBar from './components/Searchbar'
import searchImages from './api';

export default function App() {

    const handleSubmit = async (term) => {
      const result = await searchImages(term)
    }




    return (
        <div>
            <SearchBar onSubmit={handleSubmit} />
        </div>
    );
}