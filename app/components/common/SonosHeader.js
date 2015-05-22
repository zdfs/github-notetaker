var React = require('react'),
		SonosHeader;

SonosHeader = React.createClass({

	render: function() {

		return (
			<div className="contain-to-grid">
				<nav data-topbar className="top-bar sonos-bar">
					<ul className="title-area">
						<li className="name">
							<h1><a>Sonos</a></h1>
						</li>
					</ul>
				</nav>
			</div>
		);

	}

});

module.exports = SonosHeader;