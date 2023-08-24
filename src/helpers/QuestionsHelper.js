export const loadedQuestion = async (
  amount = 10,
  category = 27,
  type = 'multiple'
) => {
  const uri = `https://opentdb.com/api.php?amount=${amount}&category=${category}&type=${type}`;
  try {
    
    const res = await fetch(uri);
    const { results } = await res.json();
    return convertQuestionFromApi(results);
  } catch (err) {
    console.error(err);
  }
};

const convertQuestionFromApi = (rawQuestions) => {
  return rawQuestions.map((loadedQuestion) => {
    const formatttedQuestion = {
      question: loadedQuestion.question,
      answerChoices: [...loadedQuestion.incorrect_answers],
    };
    formatttedQuestion.answer = Math.floor(Math.random() * 4);
    formatttedQuestion.answerChoices.splice(
      formatttedQuestion.answer,
      0,
      loadedQuestion.correct_answer
    );
    return formatttedQuestion;
  });
};
