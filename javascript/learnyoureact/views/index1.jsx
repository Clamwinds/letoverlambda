import React from 'react';

export default class TodoBox extends React.Component {
    render() {
        return (
            <div className="todoBox">
                <h1>Todos</h1>
                <TodoList />
                <TodoForm />
            </div>
        );
    }
}

class TodoList extends React.Component {
    render() {
        return (
            <div className="todoList">
                I am a TodoList.
                </div>

        )
    }
    // Write code here

}

class TodoForm extends React.Component {
    render(){
        return(
            <div className="todoForm">
                I am a TodoForm.
                </div>
        )





    }



    // Write code here
}

//OK so essentially what we were supposed to learn is to use  className as
// opposed to class