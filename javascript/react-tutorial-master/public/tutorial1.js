/**
 * Created by lucien on 12/11/15.
 */
var CommentBox = React.createClass({
  loadCommentsFromServer: function() {
    $.ajax({
      url: this.props.url,
      dataType: 'json',
      cache: false,
      success: function(data) {
        this.setState({data: data});
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
  },
  getInitialState: function() {
    return {data: []};
  },
  componentDidMount: function() {
    this.loadCommentsFromServer();
    setInterval(this.loadCommentsFromServer, this.props.pollInterval);
  },
  render: function() {
    return (
      <div className="commentBox">
        <h1>Comments</h1>
        <CommentList data={this.state.data} />
        <CommentForm />
      </div>
    );
  }
});
//props are immutable, state is mutable

ReactDOM.render(
  <CommentBox url="/api/comments" pollInterval={2000}/>,
  document.getElementById('content')
);

var CommentList = React.createClass({
  render: function(){
    return (
      <div className="commentList">
        {commentNodes}
        <Comment author="Pete Hunt"> This is one comment</Comment>
        <Comment author="jordan Walke">This is *another* comment</Comment>
        </div>
    );
  }
});

var CommentForm = React.createClass({
  render: function() {

    return (
      <div className="commentForm">
        Hello, world! I am a CommentForm.
        </div>
    );

  }
});

var Comment = React.createClass({
  rawMarkup: function() {
    var rawMarkup = market(this.props.children.toString(), {sanitize: true});
    return { __html: rawMarkup };
  },

  render: function() {
    return (
      <div className="comment">
        <h2 className="commentAuthor">

        {this.props.author}
        </h2>
        <span dangerouslySetInnerHTML={this.rawMarkup()} />
        </div>
    );
  }
});

var data = [
  {id: 1, author: "Pete Hunt", text: "This is one comment"},
  {id: 2, author: "Jordan Walke", text: "This is *another* comment"}
];

var CommentForm = React.createClass({
  render: function() {
    return (
      <form className="commentForm">
        <input type="text" placeholder="Your name" />
        <input type="text" placeholder="Say something..." />
        <input type="submit" value="Post" />
      </form>
    );
  }
});
