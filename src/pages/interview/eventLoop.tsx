import React from "react"
import Header from "../../components/Header/Header"
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import { duotoneLight } from "react-syntax-highlighter/dist/esm/styles/prism"

const EventLoop = () => {
  const codeString = `console.log(1);
setTimeout(() => console.log(2), 0);
console.log(3);
setTimeout(() => console.log(4), 1000)
    `

  const answerString = `1
3
2
4`
  return (
    <div>
      <Header />
      <div className="container">
        <div>
          <h3>Find the output of the following code</h3>
          <SyntaxHighlighter
            wrapLines
            showLineNumbers
            language="javascript"
            style={duotoneLight}
          >
            {codeString}
          </SyntaxHighlighter>
        </div>
        <div>
          <h3>Solution</h3>
          <SyntaxHighlighter
            wrapLines
            showLineNumbers
            language="plaintext"
            style={duotoneLight}
          >
            {answerString}
          </SyntaxHighlighter>
        </div>

        <div>
          <h3>Concepts</h3>
          <p>
            The concepts that are covered in the above question are setTimeout
            as well as event loop of javascript.
          </p>
          <p>
            Here is a very good explanation about event loop in medium blog -
            <a href="https://medium.com/front-end-weekly/javascript-event-loop-explained-4cd26af121d4">
              Article by Anoop Raveendran
            </a>
          </p>
        </div>

        <div>
          <h3>Follow UP Questions</h3>
          <p>
            The follow up questions are mostly around event loop and how it
            works{" "}
          </p>
        </div>
      </div>
    </div>
  )
}

export default EventLoop
