
var Alert = require('react-bootstrap/lib/Alert');
var Button = require('react-bootstrap/lib/Button');
var ButtonToolbar = require('require-bootstrap/lib/Button');
var Router = require('react-router').Router;
var Route = require('react-router').Route;
var Link = require('react-router').Link;


const App = React.createClass({
        render() {
            return (
                <div>
                    <h1>App</h1>
                    {/* change the <a>s to <Link>s */}
                    <ul>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/inbox">Inbox</Link></li>
                    </ul>

                    {/*
                     next we replace `<Child>` with `this.props.children`
                     the router will figure out the children for us
                     */}
                    {this.props.children}
                </div>
            )
        }
    })

var buttonGroupInstance = (
    <ButtonGroup>
        <DropdownButton bsStyle="success" title="Dropdown">
            <MenuItem key="1">Dropdown link</MenuItem>
            <MenuItem key="2">Dropdown link</MenuItem>
        </DropdownButton>
        <Button bsStyle="info">Middle</Button>
        <Button bsStyle="info">Right</Button>
    </ButtonGroup>
);

React.render(buttonGroupInstance, mountNode);



render((
    <Router>
        <Route path="/" component={App}>
            <Route path="about" component={About} />
            <Route path="inbox" component={Inbox} />
        </Route>
    </Router>
), document.body);


