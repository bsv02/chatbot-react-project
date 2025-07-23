import dayjs from 'dayjs';
import axios from 'axios'

export async function robotResponse(userInput){
  const input = String(userInput).toLowerCase();

  const greetings = ['hi','hello','hi robot','hi chatbot'];
  if(greetings.includes(input)){
    return `Hello , here are the tasks i can perform!<br>
            Motivate you with a quotation.<br>
            Display todays date.<br>
            Tell you a joke.<br>
            Give you the result of heads and tails.<br>
            The result of rock paper scissors game.<br>`;
  }

  if (input.includes('heads')|| input.includes('tails')|| input.includes('tail')|| input.includes('head')){
    return `Sure , you got ${headsAndTails()}`;
  }

  if (input.includes('rock')||input.includes('paper')||input.includes('scissors')){
    return `Sure , you got ${rockPaperScissors()}`;
  }

  if(input.includes('date')||input.includes("today's date")||input.includes('today date')){
    return `${todayDate()}`;
  }

  if(input.includes('quote')||input.includes('quotation')||input.includes('motivate')||input.includes('motivation')){
    const quote = await getQuote();
    return `${quote}`;
  }

  if(input.includes('joke')){
    const {setup,punchline} = await getJoke();
    return `${setup}
    punchline : ${punchline}`;
  }

  if(input.includes('thank you')){
    return 'Just doing my robot duties 🤖'
  }

  if(input.includes('bye')){
    return 'Bye, Have a good day.'
  }

  return `I didn't quite understand that.
          here are the tasks i can perform!
          Motivate you with a quotation.<br>
          Display todays date.<br>
          Tell you a joke.<br>
          Give you the result of heads and tails.<br>
          The result of rock paper scissors game.<br>`;
}

function headsAndTails(){
  const randomNumber = Math.random();
  const result = (randomNumber>=0.5) ? 'Heads': 'Tails';
  return result;
}

function rockPaperScissors(){
  const randomNumber = Math.random();
  let result;
  if(randomNumber <= 0.3){
    result = 'Rock';
  } else if( randomNumber >0.3 && randomNumber<=0.6){
    result = 'Paper';
  } else{
    result = 'Scissors';
  }
  return result ;
}

function todayDate(){
  const result = `${dayjs().format('DD,MMMM YYYY')}`;
  return result;
}

async function getQuote(){
  const quote = await axios.get('https://quotes-api-self.vercel.app/quote');
  return quote.data.quote;
}

async function getJoke(){
  const joke = await axios.get('https://official-joke-api.appspot.com/random_joke');
  //const setup = joke.data.setup;
  //const punchline = joke.data.punchline;
  const {setup,punchline} = joke.data;
  return {setup,punchline};
}




