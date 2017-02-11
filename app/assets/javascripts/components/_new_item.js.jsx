class NewItem extends React.Component {
  constructor(props) {
    super(props);
    
    this.handleClick = this.handleClick.bind(this);
  }
  
  handleClick() {
    const name = this.refs.name.value;
    const description = this.refs.description.value;
    $.ajax({
      url: 'api/v1/items',
      type: 'POST',
      data: { item: { name: name, description: description }},
      success: (item => this.props.handleSubmit(item)),
    });
  }
  
  render() {
    return (
      <div>
       <input ref="name" placeholder="Enter the name of an item"/>
       <input ref="description" placeholder="Enter a description"/>
       <button onClick={this.handleClick}>Submit</button>
      </div>
    );
  }
};
