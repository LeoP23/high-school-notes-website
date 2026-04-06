import React, { useState } from 'react';
import clsx from 'clsx';

export default function Quiz({ questions }) {
  const [submitted, setSubmitted] = useState(false);
  const [selectedAnswers, setSelectedAnswers] = useState({});

  const handleOptionChange = (questionIndex, optionIndex) => {
    if (submitted) return; // Lock answers after submission
    setSelectedAnswers({
      ...selectedAnswers,
      [questionIndex]: optionIndex,
    });
  };

  const handleSubmit = () => setSubmitted(true);
  const handleReset = () => {
    setSubmitted(false);
    setSelectedAnswers({});
  };

  return (
    <div style={{
      border: '1px solid var(--ifm-color-emphasis-300)',
      borderRadius: '8px',
      padding: '1.5rem',
      backgroundColor: 'var(--ifm-background-surface-color)',
      margin: '2rem 0'
    }}>
      <h3 style={{ marginTop: 0 }}>Verifica le tue intuizioni 🧠</h3>
      
      {questions.map((q, qIdx) => (
        <div key={qIdx} style={{ marginBottom: '1.5rem' }}>
          <p style={{ fontWeight: 'bold' }}>{qIdx + 1}. {q.question}</p>
          {q.options.map((option, oIdx) => {
            const isSelected = selectedAnswers[qIdx] === oIdx;
            const isCorrect = oIdx === q.correctAnswer;
            
            // Logic for coloring choices after submission
            let highlightClass = "";
            if (submitted) {
              if (isCorrect) highlightClass = "alert alert--success";
              else if (isSelected && !isCorrect) highlightClass = "alert alert--danger";
            }

            return (
              <div 
                key={oIdx} 
                className={clsx(highlightClass)}
                style={{ 
                  padding: '8px', 
                  borderRadius: '4px', 
                  cursor: submitted ? 'default' : 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px'
                }}
                onClick={() => handleOptionChange(qIdx, oIdx)}
              >
                <input
                  type="radio"
                  name={`question-${qIdx}`}
                  checked={isSelected}
                  readOnly
                />
                <label style={{ cursor: 'pointer', margin: 0 }}>{option}</label>
              </div>
            );
          })}
          {submitted && selectedAnswers[qIdx] !== undefined && (
            <p style={{ fontSize: '0.9rem', marginTop: '10px', fontStyle: 'italic' }}>
              {selectedAnswers[qIdx] === q.correctAnswer ? "✅ Corretto!" : `❌ Sbagliato. ${q.explanation}`}
            </p>
          )}
        </div>
      ))}

      {!submitted ? (
        <button className="button button--primary" onClick={handleSubmit}>
          Controlla Risposte
        </button>
      ) : (
        <button className="button button--secondary" onClick={handleReset}>
          Riprova
        </button>
      )}
    </div>
  );
}