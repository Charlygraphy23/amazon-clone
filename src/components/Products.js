import React from "react";
import "../styles/products.css";

const Products = ({ customClass, rating, price, desc, url }) => {
	return (
		<div className={"mb-3 " + customClass}>
			<div className='products '>
				<p className='m-0 ' style={{ lineHeight: 1.3 }}>
					{desc}
				</p>
				<p className='m-0 mt-1'>
					<b>$ {price}</b>
				</p>
				<div className='product__rating'>
					{Array(rating)
						.fill()
						.map((i) => (
							<p key={i} className='m-0 mr-1'>
								<i class='fa fa-star' aria-hidden='true'></i>
							</p>
						))}
				</div>
				<div className='product__container'>
					<img src={url} alt='product1' />
					<div className='text-center'>
						<button>Add to cart</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Products;
