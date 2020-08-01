import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

class DishDetail extends Component{

    renderComments(comments){
        if (comments == null){
            return(
                <div></div>
            )
            }
        const cmnts = comments.map(comment => {
            return(
                <div key ={comment.id}>
                    <p>{comment.comment}</p>
                    <p>--{comment.author},{comment.date}</p>
                </div>
            )
        })
        return(
            <div className='col-12 col-md-5 m-1'>
                <h4> Comments</h4>
                <div className = 'container'>
                    {cmnts}
                </div>

            </div>
        )

}

    renderDish(dish){
        if (dish != null){
            return(
                <div className = 'col-12 col-md-5 m-1'>
                    <Card className ='container'>
                        <CardImg width ='100%' src= {dish.image} alt= {dish.name}/>
                        <CardBody>
                            <CardTitle>{dish.name}</CardTitle>
                            <CardText>{dish.description}</CardText>
                        </CardBody>
                    </Card>
                </div>
            )
    }
        else{
            return(<div></div>)
        }

    }
    render(){
        const dish = this.props.dish
        if (dish == null) {
            return(<div></div>)
        }
        const dishItem = this.renderDish(dish)
        const commentItem = this.renderComments(dish.comments)

        return(
            <div className='row'>
                {dishItem}
                {commentItem}

            </div>
        )
    }



}


export default DishDetail