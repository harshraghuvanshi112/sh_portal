import React, { useState } from 'react';
import Puzzle from './Puzzle';

const PuzzleContainer = () => {
    const puzzlesData = [
        {
          id: 1,
          question: "Two trains are on the same track and they are coming toward each other. The speed of the first train is 50 km/h and the speed of the second train is 70 km/h. A bee starts flying between the trains when the distance between two trains is 100 km. The bee first flies from the first train to the second train. Once it reaches the second train, it immediately flies back to the first train… and so on until the trains collide. Calculate the total distance travelled by the bee. The speed of the bee is 80 km/h.",
          answer: "66.67 km (approx) <br/> Let the first train A move at u km/h.\n\nLet the second train B move at v km/h.\n\nLet the distance between two trains be d km.\n\nLet the speed of bee be b km/h.\n\nTherefore, the time taken by trains to collide = d/(u+v)\n\nNow putting all the known values into the above equation, we get,\n\nu = 50 km/hr\nv = 70 km/hr\nd = 100 km\nb = 80 km/hr\n\nTherefore, the total distance travelled by the bee\n= b*d/(u+v)\n= 80 * 100/(50+70)\n= 66.67 km (approx)"
        },
        {
          id: 2,
          question: "Before the days of motor cars, a man rode into town on his horse. He arrived on Sunday, spent three days in town and left on Sunday. How is that possible??",
          answer: "The name of the horse was Sunday."
        },
        {
            id: 3,
            question: "Before the days of motor cars, a man rode into town on his horse. He arrived on Sunday, spent three days in town and left on Sunday. How is that possible??",
            answer: "The name of the horse was Sunday."
          },
          {
            id: 4,
            question: " Imagine that you have 26 constants, labeled A through Z. Each constant is assigned a value in the following way: A = 26^1, B = 25^2, C = 24^3, D = 23^2 and so on till Z = 1^26. Find the exact numerical value to the following equation: (Y - A) * (Y - B) * (Y - C) * ... * (Y - Z).",
            answer: "(Y - A) * (Y - B) * (Y - C) * ... * (Y - Y) * (Y - Z) equals 0 since (Y - Y) is zero."
          },
          {
            id: 5,
            question: "A girl found that she had a 56 cms strip of ribbon. She could cut a cm off every second. How long would it take for her to cut 56 pieces? She can not fold the strip and also, can not stack two or more strips and cut them together.?",
            answer: "To get 56 pieces, the girl will have to put only 55 cuts. i.e. she can cut 56 pieces in 55 seconds. After getting 54 pieces, she will have a 2 cms long piece. She can cut it into two with just a one cut in 1 second. Hence, total of 55 seconds."
          },
          {
            id: 6,
            question: "Mr. Orange, Mr. Green and Mr. Yellow were chatting in the FALTU group meeting. They were wearing a orange costume, a green costume and a yellow costume, not necessarily in the same order. Mr. Yellow sent message, We all are wearing costume that are of the same color as our names but none of us is wearing a costume that is the same color as his name. On that a person wearing the green costume replied, What difference does that make Can you tell what color costume each of the three persons had on?",
            answer: "Mr. Yellow must not be wearing yellow costume as that is the same color as his name. Also, he was not wearing green costume as the person wearing green costume responded to his comment. So Mr. Yellow must be wearing a orange costume.Similarly, Mr. Green must be wearing either orange or yellow costume. But Mr. Yellow is wearing a orange costume. Hence, Mr. Green must be wearing a yellow costume. And, Mr. Orange must be wearing green costume."
          },
        // Add more puzzle data as needed
      ];
      
  return (
    <div>
      {puzzlesData.map(puzzle => (
        <Puzzle key={puzzle.id} id={puzzle.id} question={puzzle.question} answer={puzzle.answer} />
      ))}
    </div>
  );
};

export default PuzzleContainer;
