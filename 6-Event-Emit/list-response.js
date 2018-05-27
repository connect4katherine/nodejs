const EventEmitter = require('events');

// ============================================================
// Mocking Server Response 

class Server extends EventEmitter{
	constructor(client){
		super();

		this.tasks = {};
		this.taskId = 1;

		process.nextTick(()=>{
			this.emit('response', 'Whatsup? Type help, add <task>, ls, delete :id, or done');
		});

		client.on('input', (input, args) =>{
			console.log(input, '...server');
			switch(input){
				case 'help':
				case 'add':
				case 'ls':
				case 'delete':
					this[input](args);
					break;
				default:
					this.emit('response', 'nope... idk that one...');
					break;
			}
		});
	}

	help(){
		this.emit('response', `Available Commands:
			add task
			ls
			delete :id
			done`
			);
	}

	add(args){
		if(!args.length){
			return this.emit('response', 'Add what?');
		}

		this.tasks[this.taskId++] = args.join(' ');
		this.emit('response', `Added ${args.join(' ')}`);
	}

	ls(){
		this.emit('response', JSON.stringify(this.tasks));
	}

	delete(args){
		delete this.tasks[args[0]]
		this.emit('response', `deleted ${args[0]}... now you just have `+ JSON.stringify(this.tasks));
	}
}

module.exports = (client) => new Server(client);