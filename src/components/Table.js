import React, { useState, useEffect } from "react";
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import axios from "axios";
import NavbarComp from './NavbarComp';
import { Link, useNavigate } from 'react-router-dom';

const OrganiserTable = () => {
	const [users, setUsers] = useState([]);
	const history = useNavigate();

	useEffect(() => {
		axios.post("http://localhost:8000/getusers", {})
			.then(res => {
				setUsers(res.data);
			})
	}, []);

	function showDetails (user) {
		history("/details", { state: { user: user } })
	}

	async function handleDecision(uname, decision) {

        try {
            await axios.post("http://localhost:8000/changeStatus", {
                uname, decision
            })
                .then(res => {
					if (res.data === 'Success') {
						window.location.reload();
					}
                })
                .catch(e => {
                    alert("Somthing whet wrong please try again")
                    console.log(e);
                })
        }
        catch (e) {
            console.log(e);

        }
    }

	return (
		<div>
			<section class="h-100">
				<NavbarComp />
				<div class="container py-5 h-100">
					<div class="row d-flex justify-content-center align-items-center h-100">
						<div class="col">
							<div class="card card-registration my-4" className="shadow p-3 mb-5 bg-white rounded">
								<h3 class="mb-4 pb-0 pb-md-0 mb-md-9">CONFERENCE APPLICANTS</h3>
								<div class="row g-0">
									<Table stripped  >
										<thead>
											<tr>
												{/* <th>Sr. ID</th> */}
												<th>NAME</th>
												<th>EMAIL</th>
												<th>STATUS</th>
												<th>ACTION</th>
												<th>USER DETAILS</th>
											</tr>
										</thead>
										<tbody>
											{users.map((user) => (
												<tr key={user.name}>
													{/* <td>{user.id}</td> */}
													<td>{user.name}</td>
													<td>{user.email}</td>
													<td>{user.status}</td>
													<td>
														{user.status === "Pending Approval" && (
															<div>
																<Button rounded className='me-1' variant='success' onClick={() => handleDecision(user.name, 'Approved')}>Approve</Button>
																<Button variant="outline-danger" onClick={() => handleDecision(user.name, 'Rejected')} >Reject</Button>
															</div>
														)}
													</td>
													<td>
														<div onClick={() => showDetails(user)}>
															<Button variant='warning'>Details</Button>
														</div>
													</td>
												</tr>
											))}
										</tbody>
									</Table>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};
export default OrganiserTable;


