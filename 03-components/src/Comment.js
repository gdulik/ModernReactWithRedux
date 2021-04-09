export default function Comment({ avatar, name, time, text }) {
	return (
		<div className="comment">
			<a href="/" className="avatar">
				<img alt="avatar" src={avatar} />
			</a>
			<div className="content">
				<a href="/" className="author">
					{name}
				</a>
				<div className="metadata">
					<span className="date">Today at {time}PM</span>
				</div>
				<div className="text">{text}</div>
			</div>
		</div>
	);
}
