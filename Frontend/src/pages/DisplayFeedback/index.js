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
     <AppHeader></AppHeader>
    <div className='h-screen bg-primary items-center justify-center'>
        <div className='authentication-form bg-white p-1'>
          <h1 className="text-secondary text-2xl font-bold mb-4">Feedbacks</h1>
        </div>
        <hr />
        <div className='authentication-form bg-white p-1' style={{ marginTop: '20px' }}>
          <h2 className="text-secondary text-1 font-bold mb-2">Filter Packages</h2>
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
                        <Card>
                            <p>Name: {feedback.name} </p>
                            {/* <p>Email: {feedback.email}</p> */}
                            <p>: {feedback.filterOption}</p>
                            <Rate defaultValue={feedback.rate} disabled />
                            <p>Feedback: {feedback.text}</p>
            </Card>
          
          </Col>
        ))}
      </Row>
      </div>
      <AppFooter></AppFooter>
    </>
    
  );
};

export default FeedbackList;
