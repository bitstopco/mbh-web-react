.CriteriaPanel{
	display: flex;
	width: 100%;
	height: 400px;
	background-color: #5f1fef;
	align-items: center;
	justify-content: center;

	.root_container{
		width: 90%;
		height: 85%;
		justify-content: space-between;
		align-items: flex-start;

	}
	.header{
		font-size: 35px;
		color: white; 

	}

	.text_container{
		width: 100%;
		height: 70%;
		background-color: @white;
		justify-content: space-around;
		align-items: center;
		border-radius: 2px;


		.box{
			width: 30%;
			height: 100%;
			align-items: center;
			justify-content: flex-start;

			p{
				text-align: center;
			}
		}
		.title{
			align-items: center;
			justify-content: space-between;
			height: 18%;
			margin-top: 8%;
			margin-bottom: 20px;
			p{
				font-size: 25px;
			}
			.bar{
				width: 200px;
		        height:5px; 
		        background-color: @miamiBlue;
		        
			}
		}
	}

}