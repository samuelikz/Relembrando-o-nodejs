
const questions = [
    "O que aprendi hoje",
    "O que me deixou aborrecido? e o que eu poderia fazer para melhorar?",
    "O que de deixou feliz hoje",
    "Quantas pessoas ajudei hoje",
]

const ask = (index = 0) => {
    process.stdout.write("\n\n" + questions[index] + " >")
}

ask()
const answers = []
process.stdin.on("data", data => {
    answers.push(data.toString().trim() + '\n')
    if (answers.length < questions.length){
        ask(answers.length)
    } else {
        console.log(answers)
        process.exit()
    }
})
