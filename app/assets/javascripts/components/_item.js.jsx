class Item extends React.Component {
  constructor(props) {
    super(props);

    this.state = { editable: false, name: this.props.item.name, description: this.props.item.description };

    this.handleEdit = this.handleEdit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(label, e) {
    this.setState({
      [label]: e.target.value,
    });
  }

  handleEdit() {
    if (this.state.editable) {
      const id = this.props.item.id;
      const name = this.state.name;
      const description = this.state.description;
      const item = { id: id, name: name, description: description };
      this.props.handleUpdate(item);
    }
    this.setState({ editable: !this.state.editable });
  }

  render() {
    const name = this.state.editable ? <input type="text" value={this.state.name}  onChange={e => this.handleChange('name', e)} className="col-4 form-control" /> : <h3>{this.props.item.name}</h3>;
    const description = this.state.editable ? <input type="text" value={this.state.description} onChange={e => this.handleChange('description', e)} className="col-4 form-control" /> : <p>{this.props.item.description}</p>;
    const buttonStyle = this.state.editable ? 'btn btn-outline-primary btn-sm' : 'btn btn-outline-success btn-sm'
    return (
      <div className="col-12 offset-2 items">
        {name}
        {description}
        <button type="button" onClick={this.props.handleDelete} className="btn btn-outline-danger btn-sm">Delete</button>
        <button type="button" onClick={this.handleEdit} className={buttonStyle}>{this.state.editable ? 'Submit' : 'Edit'}</button>
      </div>
    );
  }
}
