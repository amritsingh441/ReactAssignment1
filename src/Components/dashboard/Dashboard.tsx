import React, { useState } from 'react';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import NewsService from '../../service/NewsService';
import NewsCard from '../../Components/newscard/NewsCard';
import News from '../../model/News';

const Dashboard = () => {
      const [news, setNews] = useState<News[]>([]);
      const newsData = NewsService();
      newsData.then(data => { return data }).then(res => {
            let newsObjList = [...res];
            if (news.length === 0) {
                  setNews(newsObjList)
            }
      })
      let newsCardsList = news.map((newsData: News) =>
            <NewsCard key={newsData.urlToImage} nData={newsData}></NewsCard>)
      return (
            <Container maxWidth="lg">
                  <Typography component="div" variant="h6" align="center" gutterBottom>
                        News of The Day
                  <br />
                        {newsCardsList}
                  </Typography>
            </Container>)

}
export default Dashboard;