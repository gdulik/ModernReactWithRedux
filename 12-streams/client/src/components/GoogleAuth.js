import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { signIn, signOut } from '../actions';

function GoogleAuth({ isSignedIn, signIn, signOut }) {
	useEffect(() => {
		window.gapi.load('client:auth2', () => {
			window.gapi.client
				.init({
					clientId:
						'620710496242-gcbq7d6aksccmhv8bttdqak7okma31b1.apps.googleusercontent.com',
					scope: 'email'
				})
				.then(() => {
					const auth = window.gapi.auth2.getAuthInstance();
					onAuthChange(auth.isSignedIn.get());
					auth.isSignedIn.listen(onAuthChange);
				});
		});
		// eslint-disable-next-line
	}, []);

	const onAuthChange = (isSignedIn) => {
		if (isSignedIn) {
			signIn(
				window.gapi.auth2.getAuthInstance().currentUser.get().getId()
			);
		} else {
			signOut();
		}
	};

	const onSignInClick = () => {
		window.gapi.auth2.getAuthInstance().signIn();
	};

	const onSignOutClick = () => {
		window.gapi.auth2.getAuthInstance().signOut();
	};

	const renderAuthButton = () => {
		if (isSignedIn === null) {
			return null;
		} else if (isSignedIn) {
			return (
				<button
					className="ui red google button"
					onClick={onSignOutClick}
				>
					<i className="google icon" />Sign Out
				</button>
			);
		} else {
			return (
				<button
					className="ui red google button"
					onClick={onSignInClick}
				>
					<i className="google icon" />Sign In with Google
				</button>
			);
		}
	};

	return <div>{renderAuthButton()}</div>;
}

const mapStateToProps = (state) => {
	return { isSignedIn: state.auth.isSignedIn };
};

const mapDispatchToProps = {
	signIn,
	signOut
};

export default connect(mapStateToProps, mapDispatchToProps)(GoogleAuth);
