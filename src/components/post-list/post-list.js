import React from "react";
import PostListItem from "../post-list-item";
import {ListGroup, ListGroupItem} from 'react-bootstrap';
import './post-list.css'

const PostList = ({posts, onDelete, onToggleLiked, onToggleImportant}) => {

	const elements = posts.map(item => {
		const {id, ...itemProps} = item;
		return (
			<ListGroupItem key={id}>
				<PostListItem 
					{...itemProps} 
					onDelete={() => onDelete(id)} 
					onToggleImportant={() => onToggleImportant(id)} 
					onToggleLiked={() => onToggleLiked(id)}
				/>
			</ListGroupItem>
		)
	});

	return (
		<ListGroup className="app-list">
			{elements}
		</ListGroup>
	)
}

export default PostList;