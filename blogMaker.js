const blogData = [
    {
        id: 1,
        question: 'What is the difference between Local Storage and session storage?',
        answer: `
        sessionStorage is similar to localStorage, The difference is that while data in localStorage doesn't expire, data in sessionStorage is cleared when the page session ends. Whenever a document is loaded in a particular tab in the browser, a unique page session gets created and assigned to that particular tab`,
    },
    {
        id: 2,
        question: 'What is the difference between Global scope and block scope?',
        answer: `
        Global Scope: When a variable is declared top of the code, it is accessible by all the functions and codes. Block Scope: A variable when declared inside the if or switch conditions or inside for or while loops, are accessible within that particular condition or loop
        `,
    },
    {
        id: 3,
        question: 'How javaScript performs event-loop?',
        answer: `
        The Event Loop has one simple job is to monitor the Call Stack and the Callback Queue. If the Call Stack is empty, the Event Loop will take the first event from the queue and will push it to the Call Stack, which effectively runs it. Such an iteration is called a tick in the Event Loop.
        `,
    },
    {
        id: 4,
        question: 'How many way we can get undefined in js?',
        answer: `
            If you dont return anything from a function but you want to assign the function to a variable or console the function then you will get undefined. If you want to access any variable that is not declared yet or has no value in it then you will get an undefined. You will get undefined value when you call a non-existent property or method of an object. In the above example, a function Sum does not return any result but still we try to assign its resulted value to a variable. So in this case, result will be undefined.
        `,
    },
]


const blogCreator = (blogData) => {
    
}