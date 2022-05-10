import React, { useMemo, useState } from "react";

const Section = () => {
  const [word, setWord] = useState("");

  const isPalindrome = useMemo(() => {
    return palindrome(word)
  }, [word]);

  return (
    <div className="App">
        <div>
        Example test cases:
        <ul>
          <li>
            Input: race car
            <br></br>
            Output: It's a palindrome!
          </li>
          <br></br>
          <li>
            Input: a man, a plan, a canal, panama
            <br></br>
            Output: It's a palindrome!
          </li>
          <br></br>
          <li>
            Input: Hello!
            <br></br>
            Output: Sorry, try again
          </li>
        </ul>
      </div>
      <form>
        <div>
          <label>word to check</label>
          <input style={{width: '400px'}} placeholder="type here " value={word} onChange={(e) => setWord(e.target.value)} />
        </div>
      </form>
      {word && <div>{isPalindrome ? "It's a palindrome!" : "Sorry, try again"}</div>}
    </div>
  );

  function palindrome(str) {
  
    const regex = new RegExp(/[a-zA-Z\d]/, 'g')

    let sample = str.toLowerCase()
    
    let result = str.toLowerCase().split("").reverse().join("")

    if (str){
      sample = sample.match(regex).join()
      result = result.match(regex).join()
    }
    else{
      return sample, result;
    }
    
    return sample === result
  }
};

export default Section
