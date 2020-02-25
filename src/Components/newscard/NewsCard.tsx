import React from 'react';
import Card from '@material-ui/core/Card';
import Link from '@material-ui/core/Link';
import CardContent from '@material-ui/core/CardContent';
import News from '../../model/News';
import Button from '@material-ui/core/Button';
import SaveNews from '../../service/SaveNews'


const NewsCard = (props: any) => {    
return <div>
        <Card>
            <CardContent>
                <Link href="#">{props.nData.urlToImage}</Link>
                <p>{props.nData.title}</p>
                <p>{props.nData.author}</p>
                <Button variant="contained" component="span" color="primary" onClick ={() => SaveNews(props.nData)}>Add To Favourites</Button>
            </CardContent>
        </Card>
    </div>
}

export default NewsCard;