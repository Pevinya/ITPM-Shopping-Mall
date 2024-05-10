import React, { useState, useEffect } from "react";
import { Card, Row, Col, Select, Button, Rate,message } from "antd";
import { DeleteFeedbackDetails, GetFeedbackDetails } from "../../apicalls/feedback";
import FeedbackForm from "./feedbacksForm";
import AppFooter from '../Footer';
import AppHeader from '../Header';

const { Meta } = Card;
const { Option } = Select;


const FeedbackList = () => {
    const [feedbacks, setFeedbacks] = useState([]);
    const [selectedFilter, setSelectedFilter] = useState("All");
    const [openFeedbackForm, setOpenFeedbackForm] = React.useState(false);
    const [feedbackToUpdate, setFeedbackToUpdate] = useState(null);
    const [refresh, setRefresh] = useState(false);


    useEffect(() => {
        const fetchFeedbacks = async () => {
            try {
                const response = await GetFeedbackDetails("lakithadilshan08@gmail.com");
                setFeedbacks(response.data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchFeedbacks();
    }, [refresh, feedbacks]);

    const handleFilterChange = (value) => {
        setSelectedFilter(value);
    };

    const handleFeedbackUpdate = () => {
        setRefresh(!refresh);
    };

    const handleFeedbackDelete = async (feedbackId) => {
        try {
            await DeleteFeedbackDetails(feedbackId);
            message.success('Feedback successfully deleted!');
            setRefresh(!refresh);
        } catch (error) {
            console.error(error);
            message.error('Failed to delete feedback. Please try again.');
        }
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
          <h2 className="text-secondary text-1 font-bold mb-2">Select the package</h2>
        </div>
        <Select defaultValue="All" style={{ width: 200 ,display: 'block', margin: '0 auto', marginBottom: '20px'}} onChange={handleFilterChange}>
            <Option value="All">All</Option>
            <Option value="Kids & Family">Kids & Family</Option>
            <Option value="Leisure">Leisure</Option>
            <Option value="Foodie">Foodie</Option>
            <Option value="Shoppers">Shoppers</Option>
        </Select><Row key={JSON.stringify(feedbacks)} gutter={[16, 16]}>
                {filteredFeedbacks.map((feedback) => (
                    <Col key={feedback._id} xs={24} sm={12} md={8} lg={6}>
                        <Card style={{backgroundColor:'#E6E6FA'}}>
                            <p>Name: {feedback.name} </p>
                            {/* <p>Email: {feedback.email}</p> */}
                            <p>: {feedback.filterOption}</p>
                            <Rate defaultValue={feedback.rate} disabled />
                            <p>Feedback: {feedback.text}</p>

                            <div>
                                <div className="flex justify-between">
                                    <div>
                                        <Button title='Update'
                                            onClick={() => {
                                                setOpenFeedbackForm(true);
                                                setFeedbackToUpdate(feedback);
                                            }}
                                        >Update</Button>
                                    </div>
                                    <div>
                                        <Button title='Delete' 
                                            onClick={() => {
                                                DeleteFeedbackDetails(feedback._id);
                                                handleFeedbackDelete();
                                            }}
                                            
                                        >Delete</Button>
                                       
                                    </div>
                                </div>

                                {openFeedbackForm && <FeedbackForm open={openFeedbackForm} setOpen={setOpenFeedbackForm} feedback={feedbackToUpdate} onFeedbackUpdate={handleFeedbackUpdate} />}
                            </div>
                        </Card>
                    </Col>
                ))}
            </Row>
            
            </div>
            <AppFooter />
            </>
    );
};

export default FeedbackList;
