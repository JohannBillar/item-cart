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
      <div className="col-12 offset-2">
        <div className="row">
          <input type="text" ref="name" placeholder="Enter the name of an item" className="col-4 form-control" />
          <input type="text" ref="description" placeholder="Enter a description" className="col-4 form-control" />
          <button type="button" onClick={this.handleClick} className="btn btn-outline-primary">Submit</button>
        </div>
      </div>
    );
  }
};
