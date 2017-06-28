import React ,{Component} from 'react'

class Carousel extends Component{
	renderImages(){
		 return this.props.images.map((img)=>{
			 return(
				 <div  key={img.id}>
					 <h2>{img.comment}</h2>
					 <img className="carousel-img" src={'../../public/img/'+img.src}/>
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
