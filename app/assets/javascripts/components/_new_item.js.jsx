class NewItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = { name: '', description: '' };
    
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(label, e) {
    this.setState({
      [label]: e.target.value,
    });
  }
  
  handleClick() {
    $.ajax({
      url: 'api/v1/items',
      type: 'POST',
      data: { item: { name: this.state.name, description: this.state.description }},
      success: (item => this.props.handleSubmit(item)),
    });
    this.setState({ name: '', description: '' });
  }
  
  render() {
    return (
      <div className="col-12 offset-2">
        <div className="row">
          <input type="text" value={this.state.name} onChange={e => this.handleChange('name', e)} placeholder="Enter the name of an item" className="col-4 form-control" />
          <input type="text" value={this.state.description} onChange={e => this.handleChange('description', e)}  placeholder="Enter a description" className="col-4 form-control" />
          <button type="button" onClick={this.handleClick} className="btn btn-outline-primary">Submit</button>
        </div>
      </div>
    );
  }
};
