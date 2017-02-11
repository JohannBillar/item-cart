class AllItems extends React.Component {
  constructor(props) {
    super(props);

    this.onUpdate = this.onUpdate.bind(this);
  }

  onUpdate(item) {
    this.props.onUpdate(item);
  }

  handleDelete(id) {
    this.props.handleDelete(id);
  }

  render() {
    const items = this.props.items.map(item => (
      <div key={item.id}>
        <Item
          item={item}
          handleDelete={this.handleDelete.bind(this, item.id)}
          handleUpdate={this.onUpdate}
        />
      </div>
    ));

    return <div>{items}</div>;
  }
};
