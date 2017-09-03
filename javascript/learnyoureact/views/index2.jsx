import React from 'react';

export default class TodoBox extends React.Component {
    render(){

        return (
            <div className="todoBox">
                <h1>Todos</h1>
                <TodoList />
                <TodoForm />
                </div>
        )
    }

    // Omitted
}

class TodoList extends React.Component {
    render() {
        return (
            <div className="todoList">
                <table style={{border: "2px solid black"}}>
                    <tbody>
                    <Todo title="Shopping">Milk</Todo>
                    <Todo title="Hair cut">13:00</Todo>
                    </tbody>
                </table>
            </div>
        );
    }
}

class Todo extends React.Component {
  //  <ChildComponent some-attribute="this gets passed"> So does this </ChildComponent>
    // Write code here
   render() {
       return (
           //<ChildComponent some-attribute="this gets passed"> So does this </ChildComponent>
           <tr>
               <td style={{border: "1px solid black"}}>{this.props.title}</td>
               <td style={{border: "1px solid black"}}>{this.props.children}</td>
           </tr>


           // so this displays all the value of the titles and children
          // {<div classNamethis.props.title}
          // {this.props.children}
       );
   }
}

class TodoForm extends React.Component {
    render() {
        return (
            <div className="todoForm">
                I am a TodoForm.
                </div>

        );
    }
    // Omitted
}

//This thhing started to work when I added in boilerplate code for TodoForm and TodoBox that were otherwise blank
