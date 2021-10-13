import React from 'react';

class Card extends React.Component {
    
	render() {
        const {name,company,avatar_url} = this.props;
  	return (
    	<div className="github-profile">
    	  <img src={avatar_url} alt="hi there"/>
        <div className="info">
          <div className="name">{name}</div>
          <div className="company">{company}</div>
        </div>
    	</div>
    );
  }
}

export default Card;