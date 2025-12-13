interface IntroProps {
  setHasQuizStarted: (started: boolean) => void;
}

export function Intro({ setHasQuizStarted }: IntroProps) {
  const handleStartQuiz = () => {
    setHasQuizStarted(true);
  };

  return (
    <div>
      <h1 className="text-2xl font-bold">Welcome to Quiz app</h1>
      <p className="mt-2 text-gray-600">
        Test your knowledge with our interactive quiz!
      </p>
      <button
        onClick={handleStartQuiz}
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors duration-200 shadow-md hover:shadow-lg"
      >
        Start Quiz
      </button>
    </div>
  );
}
