import React ,{Component} from 'react'
var Carousel = require('react-responsive-carousel').Carousel;

class thisCarousel extends Component{
	renderImages(){
		 return this.props.images.map((img)=>{
			 return(
				 <div  key={img.id}>
					 <img className="carousel-img" src={'../../public/img/'+img.src}/>
					 <p className="legend">{img.comment}</p>
				 </div>
			 )
	  })
	}
	render(props){
		return(
		  <Carousel axis="horizontal">
				{this.renderImages()}
	    </Carousel>
		)
	}
}

export default thisCarousel;
