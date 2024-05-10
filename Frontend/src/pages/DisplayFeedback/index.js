import React, { useState, useEffect } from "react";
import { Card, Row, Col, Select,Rate } from "antd";
import { GetAllFeedbackDetails } from "../../apicalls/feedback";
import AppFooter from '../Footer';
import AppHeader from '../Header';


const { Meta } = Card;
const { Option } = Select;

const FeedbackList = () => {
  const [feedbacks, setFeedbacks] = useState([]);
  const [selectedFilter, setSelectedFilter] = useState("All");

  useEffect(() => {
    const fetchFeedbacks = async () => {
      try {
        const { feedbacks } = await GetAllFeedbackDetails();
        setFeedbacks(feedbacks);
      } catch (error) {
        console.error(error);
      }
    };

    fetchFeedbacks();
  }, []);

  const handleFilterChange = (value) => {
    setSelectedFilter(value);
  };

  const filteredFeedbacks = selectedFilter === "All" ? feedbacks : feedbacks.filter((feedback) => feedback.filterOption === selectedFilter);

  return (
    <>
    {/* <div
        // style={{
        //   padding: '20px',
        //   background: `url(${feedbackImg2})`,
        //   backgroundSize: 'cover',
        //   minHeight: '100vh', // Ensure the background covers the entire viewport
        // }}
      ></div> */}
    
     <AppHeader></AppHeader>
     <div style={{ padding: '20px', background: '#fff' }}></div>
     <h2 style={{ textAlign: 'center', fontSize: '30px', marginBottom: '30px', fontFamily: '"Times New Roman", Times, serif' }}>Feedbacks </h2>
        
        <hr />
        <div className='authentication-form bg-white p-1' style={{ marginTop: '20px' }}>
        <h6 style={{ fontSize: '18px', fontWeight: 'bold',textAlign: 'center' }}>filter Package</h6>
          
        </div>
        
      <Select defaultValue="All" style={{ width: 200,display: 'block', margin: '0 auto', marginBottom: '20px' }}  onChange={handleFilterChange}>
        
    

            <Option value="All">All</Option> 
            <Option value="Kids & Family">Kids & Family</Option>
            <Option value="Leisure">Leisure</Option>
            <Option value="Foodie">Foodie</Option>
            <Option value="Shoppers">Shoppers</Option>

    
            </Select>
    
            <Row key={JSON.stringify(feedbacks)} gutter={[16, 16]}>
                {filteredFeedbacks.map((feedback) => (
                    <Col key={feedback._id} xs={24} sm={12} md={8} lg={6}>
                        <Card style={{backgroundColor:'#E6E6FA'}}>
                            <p>Name: {feedback.name} </p>
                            {/* <p>Email: {feedback.email}</p> */}
                            <p>: {feedback.filterOption}</p>
                            <Rate defaultValue={feedback.rate} disabled />
                            <p>Feedback: {feedback.text}</p>
            </Card>
          
          </Col>
        ))}
      </Row>
     
      <AppFooter></AppFooter>
    </>
    
  );
};

export default FeedbackList;
