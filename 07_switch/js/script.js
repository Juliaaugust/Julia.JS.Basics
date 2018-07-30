console.log('You are at ' + window.location);

let answer = prompt('Введите имя музыканта');
answer = answer.toLowerCase();

switch(answer) {
	case 'jimmy hendrix':
		console.log('rock');
		break;
	case 'britney spirs':
		console.log('pop');
		break;
	case 'justin timperlake':
		console.log('rap');
		break;
	default:
		console.log('no such singer in database');
		break;
}