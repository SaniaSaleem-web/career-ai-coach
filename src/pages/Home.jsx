function Home() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center px-6 text-center">
      <h1 className="text-4xl font-bold text-gray-800 mb-4">
        Your AI Career Coach
      </h1>
      <p className="text-lg text-gray-600 max-w-xl">
        Get instant feedback on your resume and practice mock interviews with AI — built to help you land your dream job.
      </p>
      <button className="mt-8 bg-blue-600 text-white px-6 py-3 rounded-lg text-lg hover:bg-blue-700">
        Start Now
      </button>
    </div>
  );
}

export default Home;