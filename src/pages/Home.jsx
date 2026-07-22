import ChatBox from '../components/ChatBox';

function Home() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center px-6 py-10 text-center">
      <h1 className="text-4xl font-bold text-gray-800 mb-4">
        Your AI Career Coach
      </h1>
      <p className="text-lg text-gray-600 max-w-xl mb-6">
        Get instant feedback on your resume and practice mock interviews with AI — built to help you land your dream job.
      </p>

      <ChatBox />
    </div>
  );
}

export default Home;