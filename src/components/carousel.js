import React ,{Component} from 'react'

class Carousel extends Component{
	renderImages(){
		 return this.props.images.map((img)=>{
			 return(
				 <div key={img.id}>
					 <h2>{img.src}</h2>
					 <h2>{img.comment}</h2>
				 </div>
			 )
	  })
	}
	render(props){
		console.log(this.props.images)
		return(
			<div className="carousel-container">
				{this.renderImages()}
			</div>
		)
	}
}

export default Carousel;
