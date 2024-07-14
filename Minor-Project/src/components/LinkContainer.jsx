import { FaBroom } from 'react-icons/fa';

const LinkContainer = ({ handleSubmit, urlInput, setUrlInput, handleClear, phishingResult }) => (
  <div className="link-container flex justify-center flex-col items-center mb-4">
    <h1 className="text-center text-xl md:text-4xl mb-6 font-bold">
      You can run a test on the link below
    </h1>
    <form className="w-full max-w-xl mx-auto" onSubmit={handleSubmit}>
      <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only">
        Search
      </label>
      <div className="relative">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <svg
            className="w-5 h-5 text-gray-500 dark:text-gray-400"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
            />
          </svg>
        </div>
        <input
          type="search"
          id="default-search"
          name="url"
          className="block w-full p-4 pl-10 text-lg text-gray-900 border border-gray-300 rounded-lg bg-gray-100 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Enter the link"
          required
          value={urlInput}
          onChange={(e) => setUrlInput(e.target.value)}
        />
        <button
          type="submit"
          className="absolute top-0 right-0 m-2 px-4 py-2 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800"
        >
          Check
        </button>
        <button
          type="button"
          className="absolute top-0 right-20 m-2 px-4 py-2 text-white font-bold rounded-lg flex items-center"
          onClick={handleClear}
        >
          <FaBroom className="m-2" />
        </button>
      </div>
    </form>
    <div className="w-full mt-10">
      <h1 className={`text-2xl md:text-4xl text-center font-bold ${phishingResult === 'safe' ? 'text-green-600' : 'text-red-600'}`}>
        {phishingResult !== '' ? (phishingResult === 'safe' ? 'Website is not phishing' : 'Website is phishing') : ''}
      </h1>
    </div>
  </div>
);

export default LinkContainer;
