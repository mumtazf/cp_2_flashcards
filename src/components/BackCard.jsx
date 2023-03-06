import React from "react"
import { useEffect } from "react";

const BackCard = (props) => {


    const answerExtra = new Map();
    answerExtra.set(0, {answer: "Marginal probability is defined as the probability of one variable. In other words, it is the probability of an event irrespective of another event happening.", color: "green"})
    answerExtra.set(1,"");
    answerExtra.set(2,"");
    answerExtra.set(3,{answer: "Two processes are independent if knowing the outcome of one event does not tell you anything about the outcome of the other event. No, disjoint events are not independent because when you know that one event did not happen, then the other event might have definitely happened.", color: "yellow"});
    answerExtra.set(4,{answer: "", color: "green"});
    answerExtra.set(5,"");
    answerExtra.set(6,{answer:"When you sample without replacement, you know that a data entry used for one sample is not going to be selected for the second entry. This means that there is some predictability in what data entry goes into what sample and hence the independence of the variable is affected.", color: "red"});
    answerExtra.set(7,{answer:"Z-score = (Data point - Mean)/Standard Deviation", image: "src/assets/images/z_score.png"});
    answerExtra.set(8,{answer:"68-95-99.7 rule - 68% of the data falls within 1 standard deviation (SD), 95% of the data falls within 2 SD, and 99.7 within 3SD"});
    answerExtra.set(9,{answer:"Bernoulli random variables can be defined as trials that have only 2 outcomes. No, a dice roll has 6 possible outcomes so we cannot say that they are bernoulli variables unless we specify outcomes as 'outcome = 1' and 'outcome not equal to 1'"});


    //Feature to change color and image :)  working
    const changeColor = answerExtra.get(props.index)['color'];

    useEffect(() => {
        props.onColorChange(changeColor);
      }, [changeColor, props]);



return(
    <div>{answerExtra.get(props.index)['answer']}</div>
)

}

export default BackCard;