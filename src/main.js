//新規の未完了のtodoに追加するもの
const addItem = () => {
    //inputに入力されたものを取得
    const inputText = document.getElementById("input-text").value;
    document.getElementById("input-text").value = ""; 
    //リストを作る関数を使う
    createTodoList(inputText);
}

//todoリストを作る関数
const createTodoList = (todo) => {
    const ul = document.getElementById("incomplete-todo");

    const li = document.createElement("li");
    
    const div = document.createElement("div");
    div.className = "list-row";

    const p = document.createElement("p");
    p.className = "todo-item";
    p.innerText = todo;

    const completeButton = document.createElement("button");
    completeButton.innerText = "完了";
    completeButton.addEventListener("click", () => {
        const moveTargrt = completeButton.closest("li");
        completeButton.nextElementSibling.remove();
        completeButton.remove();
        const backButton = document.createElement("button");
        backButton.innerText = "戻す";
        
        backButton.addEventListener("click", () => {
            //完了したTODOの中にあるinputの内容を取得して未完了のTODOリストを作る関数を利用
            const todoText = backButton.previousElementSibling.innerText
            createTodoList(todoText);
            backButton.closest("li").remove();
        });
        
        div.appendChild(backButton);
        document.getElementById("complete-todo").appendChild(moveTargrt);
        
    });
    const deleteButton = document.createElement("button");
    deleteButton.innerText = "削除";
    deleteButton.addEventListener( "click", () => {
        const deleteTarget = deleteButton.closest("li");
        ul.removeChild(deleteTarget);
    });
    div.append(p, completeButton, deleteButton);
    li.appendChild(div);
    ul.append(li);

}

const addTodo = document.getElementById("add-todo");
addTodo.addEventListener("click", addItem);
