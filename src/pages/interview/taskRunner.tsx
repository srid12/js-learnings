import React from "react"
import Header from "../../components/Header/Header"
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import { duotoneLight } from "react-syntax-highlighter/dist/esm/styles/prism"
import Layout from "../../components/Layout/Layout"

const TaskRunner = () => {
  const codeString = `
function task(cb) {
    var timer = Math.floor(Math.random() * 1000);
    setTimeout(() => {
        console.log('Task executed at ' + new Date());
        cb()
    }, timer)
}

var taskRunner = new TaskRunner(
    [task, task], 
    () => console.log('global Call back done')
)
taskRuneer.run()
    `

  const answerString = `
function TaskRunner(tasks, cb) {
    this.tasks = tasks;
    this.cb = cb;
    this.finished = 0 
    //This keeps track of number of tasks 
    //that are finished at any point of time
}

function taskCallBack() {
    //When this is called, 
    //it means task is finished 
    //Increment the finished counter
    //Also if finished counter 
    //equals the tasks length , 
    //then we can execute our global callback
    this.finished++;
    if(this.tasks.length === this.finished) {
        this.callback()
    }
}

TaskRunner.prototype.run = function(){
    this.tasks.forEach(
        task => task(taskCallBack.bind(this)))
        //Bind so that taskRunner
        // context is available
}
    
    `
  return (
    <Layout>
      <Header />
      <div className="container">
        <div>
          <h3>Problem Statement</h3>
          <p>
            You are given a task function , which executes a task at a random
            time between 0 and 1000 ms.
            <br />
            Implement a TaskRunner which takes array of tasks and a callback
            which needs to be executed after all the tasks are completed.
            <br />
            <small>You will be given task function implementation</small>
            <SyntaxHighlighter
              wrapLines
              showLineNumbers
              language="javascript"
              style={duotoneLight}
            >
              {codeString}
            </SyntaxHighlighter>
          </p>
        </div>
        <div>
          <h3>Solution</h3>
          <p>
            You need to implement task function callback such that it will call
            taskRunner callback once all the tasks are finished
          </p>
          <SyntaxHighlighter
            wrapLines
            showLineNumbers
            language="javascript"
            style={duotoneLight}
          >
            {answerString}
          </SyntaxHighlighter>
        </div>

        <div>
          <h3>Concepts Covered</h3>
          <p>
            This is a tricky question. You need to know callbacks in javascript
            and how they can be implemented.
            <br />
            In interview, when i faced the question , the interviewer first
            asked about promises and i continued trying to solve by promises ,
            which i was unable to do
          </p>
        </div>

        <div>
          <h3>Follow UP Questions</h3>
          <p>
            TaskRunner class additionally accepts a max parameter. At a time ,
            task Runner can run only 5 tasks. Can you implement considering this
            scenario
          </p>
        </div>
      </div>
    </Layout>
  )
}

export default TaskRunner
