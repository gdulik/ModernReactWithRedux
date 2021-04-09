import faker from 'faker';
import Comment from './Comment';
import ApprovalCard from './ApprovalCard';

function App() {
	console.log();
	return (
		<div className="ui container comments">
			<ApprovalCard>
				<h4>Warning!</h4>Are you sure you want to do this?
			</ApprovalCard>
			<ApprovalCard>
				<Comment
					avatar={faker.image.avatar()}
					name={faker.name.firstName()}
					time={faker.date
						.past()
						.toString()
						.split(' ')[4]
						.slice(0, 5)}
					text={faker.lorem.sentence()}
				/>
			</ApprovalCard>
			<ApprovalCard>
				<Comment
					avatar={faker.image.avatar()}
					name={faker.name.firstName()}
					time={faker.date
						.past()
						.toString()
						.split(' ')[4]
						.slice(0, 5)}
					text={faker.lorem.sentence()}
				/>
			</ApprovalCard>
			<ApprovalCard>
				<Comment
					avatar={faker.image.avatar()}
					name={faker.name.firstName()}
					time={faker.date
						.past()
						.toString()
						.split(' ')[4]
						.slice(0, 5)}
					text={faker.lorem.sentence()}
				/>
			</ApprovalCard>
		</div>
	);
}

export default App;
