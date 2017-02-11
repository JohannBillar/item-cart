class Body extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      items: [],
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
    this.updateItems = this.updateItems.bind(this);
  }

  componentDidMount() {
    $.getJSON('/api/v1/items.json', items => this.setState({ items }));
  }

  handleSubmit(item) {
    const newState = this.state.items.concat(item);
    this.setState({ items: newState });
  }

  handleDelete(id) {
    $.ajax({
      url: `/api/v1/items/${id}`,
      type: 'DELETE',
      success: (() => this.removeItemClient(id)),
    });
  }

  removeItemClient(id) {
    const newItems = this.state.items.filter(item => item.id != id);
    this.setState({ items : newItems });
  }

  handleUpdate(item) {
    $.ajax({
      url: `/api/v1/items/${item.id}`,
      type: 'PUT',
      data: { item: item },
      success: (() => this.updateItems(item)),
    });
  }

  updateItems(item) {
    const items = this.state.items.filter(i => i.id != item.id);
    items.push(item);
    this.setState({ items: items });
  }


  render() {
    return (
      <div>
        <NewItem handleSubmit={this.handleSubmit} />
        <AllItems items={this.state.items} handleDelete={this.handleDelete} onUpdate={this.handleUpdate} />
      </div>
    );
  }
};
