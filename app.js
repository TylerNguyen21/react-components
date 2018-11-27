class GroceryItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            done: false
        }
        this.highlight = {
            over: false
        }
    }
    onListItemClick() {
      this.setState({
          done: !this.state.done
      });
    }

    highlightOverItem() {
        this.onItem({
            over: !this.highlight.over
        });
    }

    render() {
        var style ={
            textDecoration: this.state.done ? 'line-through' : 'none'
        }
        var highlight = {
            fontWeight: this.highlight.over ? 'bold' : 'none'
        }
        return (
        <li style={style} onClick={this.onListItemClick.bind(this)} onmouseover={this.highlightOverItem.bind(this)}>{this.props.groceries}</li>
        )    
    } 
}

let GroceryList = (props) => (
    <ul>
        {props.groceries.map(grocery => <GroceryItem groceries={grocery} />)}
    </ul>
)

let App = () => (
 <div>
     <h2>To Do List</h2>
     <GroceryList groceries={['cheese', 'milk']}/>
 </div>
)

ReactDOM.render(<App />, document.getElementById("app"));