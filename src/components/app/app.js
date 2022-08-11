import React from 'react';
import AppHeader from '../app-header';
import SearchPanel from '../search-panel/search-panel';
import PostStatusFilter from '../post-status-filter/post-status-filter';
import PostList from '../post-list';
import PostAddForm from '../post-add-form';
import './app.css';


export default class App extends React.Component {
	maxId = 4;

	state = {
		data: [
			{label: 'Going to lear React', important: false, like: false, id: 'qwe'},
			{label: 'That is so good', important: false, like: false,  id: 'eqw'},
			{label: 'I need a break...', important: false, like: false, id: 'rtr'}
		],
		term: '',
		filter: 'all'
	}

	deleteItem = (id) =>{
		this.setState(({data}) => {
			const index = data.findIndex(elem => elem.id === id);
			const newData = [...data.slice(0, index), ...data.slice(index+1)];

			return {
				data: newData
			}
		})
	}

	addItem = (body) => {
		const newItem = {label: body, important: false, id: this.maxId++}
		this.setState(({data}) => {
			const newArray = [...data, newItem];

			return {
				data: newArray
			}
		})
	}

	onToggleImportant = (id) => {
		this.setState(({data}) => {
			const index = data.findIndex(elem => elem.id === id);

			const old = data[index];
			const newItem = {...old, important: !old.important};
			const newData = [...data.slice(0, index), newItem, ...data.slice(index+1)];

			return {
				data: newData
			}
		})
	}

	onToggleLiked = (id) => {
		this.setState(({data}) => {
			const index = data.findIndex(elem => elem.id === id);

			const old = data[index];
			const newItem = {...old, like: !old.like};
			const newData = [...data.slice(0, index), newItem, ...data.slice(index+1)];

			return {
				data: newData
			}
		})
	}

	searchPost = (items, term) => {
		if(term.length === 0){
			return items;
		}

		return items.filter(item => {
			return item.label.indexOf(term) > -1;
		});
	}

	filterPost = (items, filter) =>{
		if(filter === 'like'){
			return items.filter(item => item.like);
		} else {
			return items;
		}
	}

	onUpdateSearch = (term) => {
		this.setState({term});
	}

	onFilterSelect = (filter) => {
		this.setState({filter});
	}

	render() {
		const {data, term, filter} = this.state;
		const liked = data.filter(item => item.like).length;
		const allPosts = data.length;
		const visiblePosts = this.filterPost(this.searchPost(data, term), filter);

		return (
			<div className='app'>
				<AppHeader liked={liked} allPosts={allPosts}/>
				<div className="search-panel d-flex">
					<SearchPanel onUpdateSearch={this.onUpdateSearch}/>
					<PostStatusFilter filter={filter} onFilterSelect={this.onFilterSelect}/>
				</div>
				<PostList posts={visiblePosts} onDelete={this.deleteItem} onToggleImportant={this.onToggleImportant} onToggleLiked={this.onToggleLiked}/>
				<PostAddForm onAdd={this.addItem}/>
			</div>
		)
	}
}