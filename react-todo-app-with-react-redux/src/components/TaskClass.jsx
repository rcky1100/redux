import React, { Component } from "react";
import { connect } from "react-redux";
import { loadTasks } from "../store/tasks";

export class TaskClass extends Component {
  componentDidMount() {
    this.props.loadTasks();
  }
  render() {
    return (
      <div>
        {this.props.tasks.map((item) => (
          <p key={item.id}>{item.task}</p>
        ))}
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return { tasks: state.tasks.tasks };
};
const mapDispatchToProps = (dispatch) => {
  return { loadTasks: () => dispatch(loadTasks()) };
};
export default connect(mapStateToProps, mapDispatchToProps)(TaskClass);
