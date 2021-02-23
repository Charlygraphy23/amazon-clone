import React from "react";
import { Link } from "react-router-dom";
import "../styles/header.css";

const Header = () => {
	return (
		<div className='header'>
			<Link to='/'>
				<img
					className='header__logo'
					src='https://pngimg.com/uploads/amazon/amazon_PNG25.png'
					alt=''
				/>
			</Link>

			<div className='header__location'>
				<svg
					xmlns='http://www.w3.org/2000/svg'
					width='16'
					height='16'
					fill='currentColor'
					class='bi bi-geo-alt'
					viewBox='0 0 16 16'>
					<path d='M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z' />
					<path d='M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z' />
				</svg>

				<div className='d-flex flex-column'>
					<p style={{ color: "#CACCC8" }}>Deliver Dipta</p>
					<p>
						<b>Durgapur 713212</b>
					</p>
				</div>
			</div>

			<div className='search___group mr-3'>
				<input type='text' />
				<button>
					<i className='fa fa-search' aria-hidden='true'></i>
				</button>
			</div>

			<div className='header__links'>
				<div className='d-flex flex-column'>
					<p className='m-0' style={{ fontSize: "0.8rem" }}>
						Hello, Dipta
					</p>
					<p className='m-0'>
						<b>Account</b>
					</p>
				</div>
			</div>

			<div className='header__links'>
				<div className='d-flex flex-column'>
					<p className='m-0' style={{ fontSize: "0.8rem" }}>
						Returns
					</p>
					<p className='m-0'>
						<b>& Orders</b>
					</p>
				</div>
			</div>

			<Link to='/'>
				<div className='cart__icon'>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						fill='currentColor'
						className='bi bi-cart2'
						viewBox='0 0 16 16'>
						<path d='M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l1.25 5h8.22l1.25-5H3.14zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z' />
					</svg>
					1
				</div>
			</Link>
		</div>
	);
};

export default Header;
