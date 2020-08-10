import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';

    function RenderComments({comments}){
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

   function  RenderDish({dish}) {
        if (dish != null){
            return(
                <div className = 'col-12 col-md-5 m-1'>
                    <Card >
                        <CardImg width= "100%" src= {dish.image} alt= {dish.name}/>
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
    const DishDetail =(props) =>{
        const dish = props.dish
        if (dish == null) {
            return(<div></div>)
        }
        return (
            <div className="container">
            <div className="row">
                <Breadcrumb>

                    <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                    <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                </Breadcrumb>
                <div className="col-12">
                    <h3>{props.dish.name}</h3>
                    <hr />
                </div>
            </div>
            <div className ='container'>
            <div className= "row">
                <div className="col-12">
                    <RenderDish dish={props.dish} />
                </div>
                <div className="col-12 ">
                    <RenderComments comments={props.comments} />
                </div>
            </div>
            </div>
            </div>
        );
    }






export default DishDetail