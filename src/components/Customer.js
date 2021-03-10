import React from 'react';

class Customer extends React.Component {
    render() {
        return(
            <div>
                <CustomerProfile id={this.props.id} image={this.props.image} name={this.props.name} />
                <CustomerInfo birthday={this.props.birthday} gender={this.props.gender} title={this.props.title} job={this.props.job} />
            </div>
        )
    }
};

class CustomerProfile extends React.Component {
    render() {
        return(
            <div>
                <p>{this.props.id}</p>
                <img src={this.props.image} alt="profile" />
                <h2>{this.props.name}</h2>
            </div>
        )
    }
};

class CustomerInfo extends React.Component {
    render() {
        return(
            <div>
                <p>{this.props.birthday}</p>
                <p>{this.props.gender}</p>
                <p>{this.props.title}</p>
                <p>{this.props.job}</p>
            </div>
        )
    }
}

export default Customer;