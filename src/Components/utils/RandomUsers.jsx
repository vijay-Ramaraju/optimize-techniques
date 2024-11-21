const users = [
  "Vijay",
  "Ram",
  "Raju",
  "nag",
  "Rani",
  "Hanuma",
  "Laxmana",
  "Sita",
  "Janaki",
  "Rahu",
  "Jhansi",
  "Laxmi",
  "Srinivas",
  "Radha",
  "Krishan",
  "Murari",
  "Mukundha",
  "Kamalesha",
  "Narayana",
  "govardhana Giridhari",
  "KamsaSahnhara",
];

export const user = () => {
    return users[Math.ceil(Math.random() * users.length)]
    
}

const data = "abcdefghiklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$*%&(&{_+?"
export const randomFunction = () => {
  let randomComment = ""
  
  for (let i = 0; i < 10; i++) {
    const rand = data[Math.ceil(Math.random() * data.length)]
    randomComment += rand
    
  }
  return randomComment
}
randomFunction()
