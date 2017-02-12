class Item extends React.Component {
  constructor(props) {
    super(props);

    this.state = { editable: false };

    this.handleEdit = this.handleEdit.bind(this);
  }

  handleEdit() {
    if (this.state.editable) {
      const id = this.props.item.id;
      const name = this.refs.name.value;
      const description = this.refs.description.value;
      const item = { id: id, name: name, description: description };
      this.props.handleUpdate(item);
    }
    this.setState({ editable: !this.state.editable });
  }

  render() {
    const name = this.state.editable ? <input type="text" ref="name" defaultValue={this.props.item.name} /> : <h3>{this.props.item.name}</h3>;
    const description = this.state.editable ? <input type="text" ref="description" defaultValue={this.props.item.description} /> : <p>{this.props.item.description}</p>;
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
