import { useState } from "react";
import { questions, title, description } from "../questionnaire.json"; // Adjust import path if necessary
import { toast } from "react-toastify";

const Questionnaire = ({ selectedLanguage }: any) => {
  const [responses, setResponses] = useState({});

  const handleOptionChange = (questionId: string, optionIndex: number) => {
    setResponses({
      ...responses,
      [questionId]: optionIndex,
    });
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();
    console.log("User Responses:", responses);
    // Reset the form contents
    setResponses({}); // Clear the responses state
    event.target.reset(); // Reset the form
    toast.success("Questionnaire submitted successfully");
  };

  return (
    <section className="bg-indigo-50 py-20 min-h-screen">
      <div className="container m-auto max-w-2xl py-14">
        <div className="bg-white px-6 py-8 shadow-md rounded-md border">
          <form onSubmit={handleSubmit}>
            <h2 className="text-3xl text-center font-semibold mb-6">
              {title[selectedLanguage as keyof typeof title]}
            </h2>
            <p className="text-center mb-6 text-gray-600">
              {description[selectedLanguage as keyof typeof description]}
            </p>

            {questions.map((question: any) => (
              <div key={question.id} className="mb-6">
                <label className="block text-gray-700 font-bold mb-2">
                  {question[selectedLanguage].question}
                </label>
                <select
                  className="border rounded w-full py-2 px-3"
                  onChange={(e) =>
                    handleOptionChange(question.id, parseInt(e.target.value))
                  }
                  required
                >
                  <option value="">Select an option</option>
                  {question[selectedLanguage].options &&
                  question[selectedLanguage].options.length > 0 ? (
                    question[selectedLanguage].options.map(
                      (option: string[], index: number) => (
                        <option key={index} value={index}>
                          {option}
                        </option>
                      )
                    )
                  ) : (
                    <option disabled>No options available</option>
                  )}
                </select>
              </div>
            ))}

            <button
              className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Questionnaire;
