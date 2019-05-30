const initState = {
	projects: [
	{id: '1', title: 'How I met your mother', content: 'blah blah blah and content of this article'},
	{id: '2', title: 'Lalaland', content: 'Movies lorem ipsum'},
	{id: '3', title: 'Adele song', content: 'song 1, 2, 3'},
	]
}

const projectReducer = (state = initState, action) => {
	switch(action.type){
		case 'CREATE_PROJECT': 
			console.log('created project', action.project)
			return state
		case 'CREATE_PROJECT_ERROR':
			console.log('Create proect error', action.err)
			return state
		default:
			return state
	}
	return state
}

export default projectReducer