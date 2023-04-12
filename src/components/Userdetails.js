import React from 'react';
import NavbarComp from './NavbarComp';
import { useParams } from 'react-router';
import { useNavigate, Link, useLocation } from "react-router-dom"

const UserDetails = () => {

	const location = useLocation()
    const history = useNavigate();
	const { name, affiliation, affiliation_address, email, contact_no, website } = location.state.user;

	return (
		<div>
			<NavbarComp />
			<div className="container my-5">
				<div className="row justify-content-center align-items-center">
					<div className="col-md-6">
						<div className="card shadow p-3 mb-5 bg-white rounded">
							<div className="text-center">
								<img
									src='https://via.placeholder.com/150'
									alt="user icon"
									className="rounded-circle img-thumbnail"
								/>
								<h4 className="my-3">{name}</h4>
							</div>
							<p className="my-3">
								<strong>Affiliation:</strong> {affiliation}
							</p>
							<p className="my-3">
								<strong>Full Affiliation Address:</strong> {affiliation_address}
							</p>
							<p className="my-3">
								<strong>Email:</strong> {email}
							</p>
							<p className="my-3">
								<strong>Contact:</strong> {contact_no}
							</p>
							<div className="text-center">
								<a href={website} className="btn btn-info">
									Visit  Website
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default UserDetails;
