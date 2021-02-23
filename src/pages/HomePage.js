import React from "react";
import Products from "../components/Products";
import "../styles/homePage.css";

const HomePage = () => {
	return (
		<>
			<div className='container p-0'>
				<img
					className='home__jumbotronImage'
					src='https://images-na.ssl-images-amazon.com/images/G/15/kindle/journeys/ZTgxNjE2MzAt/ZTgxNjE2MzAt-YWM4MWZiZTMt-w1500._CB659998062_.jpg'
					alt='logo'
				/>

				<div className='row mx-0 product__jumbo'>
					<Products
						customClass='col-6'
						rating={3}
						price={11.02}
						desc={
							"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that "
						}
						url='https://m.media-amazon.com/images/I/41HPQdRrsWL._AC_SY200_.jpg'
					/>

					<Products
						customClass='col-6'
						rating={3}
						price={13.44}
						desc={
							"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that "
						}
						url='https://images-na.ssl-images-amazon.com/images/I/61q-jy26AqL._SX425_.jpg'
					/>
				</div>

				<div className='row mx-0 product__jumbo'>
					<Products
						customClass='col-4'
						rating={3}
						price={11.02}
						desc={
							"It is a long established fact  has a more-or-less normal distribution of letters, as oppose "
						}
						url='https://images-na.ssl-images-amazon.com/images/I/31lrbOsJ2qL._SX425_.jpg'
					/>

					<Products
						customClass='col-4'
						rating={3}
						price={13.44}
						desc={
							"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that "
						}
						url='https://images-na.ssl-images-amazon.com/images/I/61j9cWJrGHL._SY355_.jpg'
					/>

					<Products
						customClass='col-4'
						rating={3}
						price={13.44}
						desc={
							"It is a long established fact that a reader will be distracted by the readable content of a page when looking "
						}
						url='https://images-na.ssl-images-amazon.com/images/I/61jNb3JtSyL._SY355_.jpg'
					/>
				</div>

				<div className='row mx-0 product__jumbo'>
					<Products
						customClass='col-12'
						rating={3}
						price={11.02}
						desc={
							"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that "
						}
						url='https://images-na.ssl-images-amazon.com/images/I/71HhBllOu0L._SX425_.jpg'
					/>
				</div>
			</div>
		</>
	);
};

export default HomePage;
